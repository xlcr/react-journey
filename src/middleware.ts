import type { NextRequest } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
 
let headers = { 'accept-language': 'en-US,en;q=0.5' }
let languages = new Negotiator({ headers }).languages()
let locales = ['en-us', 'ja-jp', 'zh-cn']
let defaultLocale = 'en-us'

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
  const cookie = request.cookies.get("token")?.value
  let chosenLocale = defaultLocale; 

  const pathnameHasLocale = locales.some(
    (locale) => request.nextUrl.pathname.startsWith(`/${locale}`) || request.nextUrl.pathname === `/${locale}`
  )

  if(!pathnameHasLocale){
    chosenLocale = match(languages, locales, defaultLocale) 
    request.nextUrl.pathname = `/${chosenLocale}${request.nextUrl.pathname}`
  }
  else {
    chosenLocale = request.nextUrl.pathname.split("/")[1] //pls consider this very carefully 
  }

  if(currentUser){
    return Response.redirect(new URL(request.nextUrl.pathname, request.nextUrl.origin))
  }
  else {
    return Response.redirect(new URL('/' + chosenLocale + "/", request.nextUrl.origin))
  }
  
}
 
export const config = {
  matcher: ["/:lang/dashboard", "/"],
}


import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('currentUser')?.value
  const cookie = request.cookies.get("token")?.value

  if(currentUser){
    return Response.redirect(new URL('/dashboard', request.url))
  }
  else {
    return Response.redirect(new URL('/', request.url))
  }
  
}
 
export const config = {
  matcher: ['/dashboard'],
}


'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export default function Navigation() {

    let pathname = usePathname()
 
    function switchLocale(locale: string) : string {
        let reg = /.{2}-.{2}/
        pathname = pathname.replace(reg, locale)
        return pathname
    }

    return (
        <>
        <div className="flex justify-between p-2 bg-black">
            <div>
                <a className="text-white">React Journey</a>
            </div>
            <div className="flex self-start gap-2">
            <Link className="text-white" href={switchLocale('en-us')}>English</Link>
            <Link className="text-white" href={switchLocale('ja-jp')}>Japanese</Link>
            <Link className="text-white" href={switchLocale('zh-cn')}>Chinese</Link>
            </div>
        </div>
        </>
    );
}
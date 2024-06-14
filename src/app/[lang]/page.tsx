
import { getDictionary } from '@/lib/getDictionary';

export default async function Home({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang) 
    return (
        <>
            <div className="max-h-screen  text-white">
                <div className="nav-curtain bg-black curtain-closed flex justify-center items-center">
                    <div className='p-10'>
                        <div className="text-xl md:text-4xl">{dict.Home.Intro}</div>
                        <div className='mb-10'>{dict.Home.Intro2}</div>
                        
                        <div>{dict.Home.NameRequest}</div>
                        <input className='text-black outline-0 rounded my-2 w-full text-center p-2'></input>
                        <div className="text-xs">{dict.Home.StoreCookiesNotice}</div>
                    </div>
                </div>
            </div>
        </>
    )
}
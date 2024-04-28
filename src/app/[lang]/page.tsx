
import { getDictionary } from '@/lib/getDictionary';

export default async function Home({ params }: { params: { lang: string } }) {
    const dict = await getDictionary(params.lang) 
    return (
        <>
            <div className="flex min-h-screen justify-center items-center">
                <div>{dict.Home.Intro}</div>
            </div>
        </>
    )
}
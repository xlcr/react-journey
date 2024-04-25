import Image from "next/image";
import GetString from '@/lib/GetString';

interface HelloProps {
  lang: string; 
}

export default function Hello(props : HelloProps)
{
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      <a className="text-white">{GetString("Home", "Intro", props.lang)}</a>
    </div>
  )
}
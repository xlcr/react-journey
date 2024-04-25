import Image from "next/image";
import GetString from '@/lib/GetString';

interface DashboardProps {
  lang: string; 
}

export default function Dashboard(props : DashboardProps)
{
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      <a className="text-black">{GetString("Home", "Intro", props.lang)}</a>
    </div>
  )
}
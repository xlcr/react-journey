import Image from "next/image";

interface DashboardProps {
  lang: string; 
}

export default function Dashboard(props : DashboardProps)
{
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
      <a className="text-black"></a>
    </div>
  )
}
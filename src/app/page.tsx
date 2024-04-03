import Image from "next/image";

export default function Hello()
{
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <label>Username</label>
        <input type="text"></input>
      </div>

      <div>
        <label>Password</label>
        <input type="password"></input>
      </div>
    </div>
  )
}
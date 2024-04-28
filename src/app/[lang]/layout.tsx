
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export default function App({
  children
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en=s">
      <body className={inter.className}>
        <Navigation/>
        {children}
        </body>
    </html>
  );
}

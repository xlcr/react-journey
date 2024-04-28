
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'en' }]
}

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

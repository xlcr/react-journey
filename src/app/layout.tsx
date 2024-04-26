"use client"

import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Dashboard from "@/components/Dashboard/Dashboard";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 

  let [lang, setLang] =  useState("en"); //placeholder

  function handleClick(lang:string) : void {
    setLang(lang);
  }

  return (
    <html>
      <body className={inter.className}>
        <Navigation lang={lang} setLang={handleClick} />
          <Dashboard lang={lang}/>
        </body>
    </html>
  );
}

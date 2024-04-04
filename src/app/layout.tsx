

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "React Journey",
  description: "The world's nth React Portfolio",
};

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 

  let detectedLang : string =  "en-US"; //placeholder

  return (
    <html>
      <body className={inter.className}>
        <Navigation lang={detectedLang} />
        {children}
        </body>
    </html>
  );
}

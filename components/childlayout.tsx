import Head from 'next/head'
import Navigation from './navigation'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../app/globals.css";
interface LayoutProps {
  children: React.ReactNode
  title: string
  description: string
}


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
export default function ChildLayout({ children, title, description }: LayoutProps) {
  return (
    
<>
     
   </>
  )
}
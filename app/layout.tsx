import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image"; // Add this import
import "./globals.css";
import Navigation from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="flex items-center justify-between w-full">
              <div className="w-[100px] h-[100px] relative">
                <Image
                  src="/Logo.png"
                  alt="Bliss Unblemished Joy logo"
                  layout="fill"
                  objectFit="contain"
                  priority
                />
              </div>
              <Navigation />
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 bg-white">
          {children}
        </main>

        <footer className="bg-white border-t border-gray-200 mt-12">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            © 2023 Bliss. All rights reserved.
          </div>
        </footer>        </body>
    </html>
  );
}
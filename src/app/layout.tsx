import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import {
  SiGithub as Github,
  SiX as Twitter,
  SiPinterest as Pinterest,
  SiDribbble as Dribbble,
  SiTelegram as Telegram,
} from "@icons-pack/react-simple-icons";

import { PageTransition } from "~/components/transition";
import { Providers } from "~/components/providers";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "A minimal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="min-h-screen">
            <header className="container mx-auto px-4 py-6 relative z-10">
              <nav className="flex items-center justify-between">
                <div className="flex space-x-6">
                  <Link
                    href="/"
                    className="text-sm font-medium hover:underline"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm font-medium hover:underline"
                  >
                    About
                  </Link>
                  <Link
                    href="/projects"
                    className="text-sm font-medium hover:underline"
                  >
                    Projects
                  </Link>
                  <Link
                    href="/articles"
                    className="text-sm font-medium hover:underline"
                  >
                    Articles
                  </Link>
                </div>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white">
                  CB
                </div>
                <div className="flex space-x-4">
                  <Link href="/" className="text-gray-600 hover:text-black">
                    <Twitter className="w-5 h-5" />
                  </Link>
                  <Link href="/" className="text-gray-600 hover:text-black">
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link href="/" className="text-gray-600 hover:text-black">
                    <Pinterest className="w-5 h-5" />
                  </Link>
                  <Link href="/" className="text-gray-600 hover:text-black">
                    <Dribbble className="w-5 h-5" />
                  </Link>
                  <Link href="/" className="text-gray-600 hover:text-black">
                    <Telegram className="w-5 h-5" />
                  </Link>
                </div>
              </nav>
            </header>
            <PageTransition>{children}</PageTransition>
          </div>
        </Providers>
      </body>
    </html>
  );
}

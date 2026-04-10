import Link from "next/link";
import Footer from "../../components/Footer";
import NavLink from "../../components/NavLink";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const navItems = [
  { path: '/contact-us', text: 'Contact us' },
  { path: '/about-us', text: 'About us' }
]

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hear Me Out!",
  description: "Create your own sound",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <section className="bg-gray-200 min-h-dvh grid grid-rows-[auto_1fr_auto]">
          <header className="bg-white/50">
            <div className="max-w-4xl mx-auto flex items-center justify-between">
              <Link href="/"><h2 className="text-2xl text-gray-500 py-3">hearMeOut</h2></Link>
              <nav>{/* className="max-w-4xl mx-auto" */}
                <ul className=" text-gray-500 text-sm">
                  <li className="flex gap-x-7">
                    {navItems.map((navItem) => (
                      <NavLink key={navItem.path} {...navItem} />
                    ))
                    }
                  </li>
                </ul>
              </nav>
            </div>
          </header>
          <main className="max-w-4xl mx-auto bg-white/50 rounded-xl py-7 px-8 m-6 overflow-hidden">
            {children}
          </main>
          <Footer />
        </section>
      </body>
    </html>
  );
}

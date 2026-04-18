import Link from "next/link";
import Footer from "../../components/Footer";
import NavLink from "../../components/NavLink";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const navItems = [
  //{ path: '/contact-us', text: 'Contact us' },
  { path: '/about-us', text: 'Sin tanto cuento...' }
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
      <body className="bg-white dark:bg-gray-800 min-h-full flex flex-col">
        <section className="min-h-dvh">
          <div>
            <div className="max-w-7xl mx-auto flex items-center justify-between px-8">
              <Link href="/"><h2 className="text-2xl py-3 title"><strong>Odd</strong>sound</h2></Link>
              <nav>
                <ul className=" text-sm">
                  <li className="flex gap-x-7">
                    {navItems.map((navItem) => (
                      <NavLink key={navItem.path} {...navItem} />
                    ))
                    }
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <main className="max-w-7xl mx-auto rounded-xl py-0 px-8 m-6 overflow-hidden">
            {children}
          </main>
          <Footer />
        </section>
      </body>
    </html>
  );
}

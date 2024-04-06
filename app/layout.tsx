import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { Icons } from "@/components/icons";
import SearchBar from "@/components/SearchBar";

import Link from "next/link";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Search",
  description: "Full-Stack Search Engine built using NextJS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`custom-scrollbar-track custom-scrollbar custom-scrollbar-thumb ${inter.className}`}
      >
        <div className="relative min-h-screen isolate overflow-hidden border-b border-gray-200 bg-white text-slate-900">
          <svg
            className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
            />
          </svg>
          <div className="mx-auto max-w-7xl px-6 pb-16  pt-20 sm:pt-28 sm:pb-18 gap-16 lg:px-8 lg:py-24">
            <div className="h-full w-full flex flex-col items-center gap-4">
              <div className="flex gap-[8px]">
                <Link href="/">
                  <h1 className="tracking-tight text-4xl xs:text-5xl sm:text-6xl font-bold ">
                    NextSearch
                  </h1>
                </Link>
                <Icons.Sparkles className="sm:h-16 sm:w-16 xs:h-12 xs:w-12 hidden md:block" />
              </div>
              <p className="max-w-md text-center text-lg text-slate-700">
                A beautifully designed, lightning-fast search built using
                Next.js.
              </p>
            </div>
            <div className="mx-auto mt-16 w-full max-w-2xl flex flex-col">
              <Suspense>
                <SearchBar />
              </Suspense>
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

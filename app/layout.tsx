import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NavBar from "./_components/NavBar";
import { Providers } from "./_components/Providers";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ronnie Kaito Imagawa | Portfolio",
  description:
    "Passionate full stack developer that turns ideas into digitized realities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://umami-fork-murex.vercel.app/script.js"
          data-website-id="2191e900-8f64-48a8-ad5d-f66a95d7933d"
        ></Script>
      </head>
      <body className={`bg-[#121212] min-h-[100svh] ${inter.className}`}>
        <Providers>
          <NavBar />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}

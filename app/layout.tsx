import type { Metadata } from 'next';
import NavBar from './_components/NavBar';
import { ThemeProvider } from '@/app/_components/Providers';
import './globals.css';
import Script from 'next/script';
import Footer from './_components/Footer';
import { inter } from '@/utils/fonts';
import 'react-toastify/dist/ReactToastify.css';
import ToastContainerWrapper from './_components/ToastContainerWrapper';

export const metadata: Metadata = {
  title: 'Ronnie Kaito Imagawa | Portfolio',
  description:
    'Passionate full stack developer that turns ideas into digitized realities.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <Script
          async
          src="https://umami-fork-murex.vercel.app/script.js"
          data-website-id="2191e900-8f64-48a8-ad5d-f66a95d7933d"
        ></Script>
      </head>
      <body
        className={`grid min-h-[100svh] grid-rows-[64px_1fr_64px] bg-background md:overflow-y-auto ${inter.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="system">
          <NavBar />
          {children}
          <Footer />
          <ToastContainerWrapper />
        </ThemeProvider>
      </body>
    </html>
  );
}

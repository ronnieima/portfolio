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
    <html lang="en" className="scroll-smooth ">
      <head>
        <Script
          async
          src="https://umami-fork-murex.vercel.app/script.js"
          data-website-id="2191e900-8f64-48a8-ad5d-f66a95d7933d"
        ></Script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>
      <body
        className={`relative min-h-[100svh] overflow-x-hidden bg-background   bg-white bg-dot-black/[0.2] dark:bg-black  dark:bg-dot-white/[0.2]  ${inter.className}`}
      >
        <NavBar />
        {children}
        <Footer />
        <ToastContainerWrapper />
      </body>
    </html>
  );
}

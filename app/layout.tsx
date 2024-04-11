import { inter } from '@/utils/fonts';
import type { Metadata } from 'next';
import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './_components/Footer';
import NavBar from './_components/NavBar';
import ToastContainerWrapper from './_components/ToastContainerWrapper';
import './globals.css';

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
        className={`relative bg-background   bg-white bg-dot-black/[0.2] ${inter.className}`}
      >
        <NavBar />
        {children}
        <Footer />
        <ToastContainerWrapper />
      </body>
    </html>
  );
}

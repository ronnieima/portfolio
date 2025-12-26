import { inter } from '@/utils/fonts';
import type { Metadata } from 'next';
import Script from 'next/script';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './_components/Footer';
import NavBar from './_components/NavBar';
import ToastContainerWrapper from './_components/ToastContainerWrapper';
import './globals.css';
import Drift from './_components/Drift';

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
          defer
          src="https://analytics.imagawa.dev/script.js"
          data-website-id="da7daf3d-ce65-4e31-b549-21a8ea0e4cd9"
        ></Script>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css"
        />
      </head>

      <body
        className={`bg-background bg-dot-black/[0.2] relative bg-white ${inter.className}`}
      >
        <NavBar />
        {children}
        <Footer />
        <ToastContainerWrapper />
        <Drift />
      </body>
    </html>
  );
}

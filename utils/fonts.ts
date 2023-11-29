import { Inter, Noto_Serif, Noto_Serif_JP } from 'next/font/google';
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const notoSerif = Noto_Serif({
  subsets: ['latin'],
  display: 'swap',
});

export const notoSerifJapanese = Noto_Serif_JP({
  weight: '700',
  preload: false,
});

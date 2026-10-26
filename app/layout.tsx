import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';
import Navbar from './components/Navbar';
import FooterSection from './components/sections/FooterSection';
import CursorSpotlight from './components/CursorSpotlight';
import './globals.css';

const manrope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Luxury Living in Bahria Town Lahore',
  description:
    'Explore premium residential and commercial developments, investment opportunities, and modern living at Boulevard01 in Bahria Town Lahore.',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${manrope.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <Navbar />
        {children}
        <FooterSection />
        <CursorSpotlight />
      </body>
    </html>
  );
}

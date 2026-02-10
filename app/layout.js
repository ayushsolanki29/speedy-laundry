import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import "./globals.css";
import { Inter, Pacifico } from "next/font/google";
import localFont from "next/font/local";
import Preloader from "@/components/Preloader";
import ClientLayout from "./ClientLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pacifico',
  display: 'swap',
});

const goudySans = localFont({
  src: [
    {
      path: '../public/assets/fonts/GoudySansStd-Book.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/GoudySansStd-BookItalic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/assets/fonts/GoudySansStd-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/GoudySansStd-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/assets/fonts/GoudySansStd-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/GoudySansStd-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../public/assets/fonts/GoudySansStd-Black.woff2',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../public/assets/fonts/GoudySansStd-BlackItalic.woff2',
      weight: '900',
      style: 'italic',
    },
  ],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  title: "Speedy Laundry - Professional Laundry Service",
  description: "Professional laundry and dry cleaning service with pickup and delivery",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${goudySans.variable} ${pacifico.variable}`}>
      <body className="font-sans antialiased">
        <ClientLayout>
          <Preloader>
            {children}
          </Preloader>
        </ClientLayout>
      </body>
    </html>
  );
}

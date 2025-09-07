import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'MeltingCheese',
  openGraph: {
    title: 'MeltingCheese',
  },
  icons: {
    icon: [
      { url: '/favicon.ico?v=2', sizes: '32x32' },
      { url: '/favicon.svg?v=2', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico?v=2',
    apple: '/favicon.svg?v=2',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4106974051146490"
     crossOrigin="anonymous"></script>
     
     <style>
      @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
    </style></head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
            {children}
      </body>
    </html>
  );
}

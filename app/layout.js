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
  // description: '순간 기억력을 테스트하는 재미있는 게임입니다.',
  openGraph: {
    title: 'MeltingCheese',
    // description: '친구들과 함께 기억력을 테스트해보세요!',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
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

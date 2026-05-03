import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito', 
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Acadexa",
  description: "Stop Cramming, Start Thriving",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={`${nunito.variable} font-sans antialiased`}>{children}</body>
    </html>
  );
}

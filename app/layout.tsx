import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import PixelToggle from '@/components/ui/pixel-toggle'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CertifyMe - Digitální certifikáty snadno a bezpečně",
  description: "Cloudová platforma pro hromadnou tvorbu, správu a distribuci certifikátů, osvědčení a diplomů s QR verifikací.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased pixel pixel-body-tile`}
      >
        {children}
        <PixelToggle />
      </body>
    </html>
  );
}

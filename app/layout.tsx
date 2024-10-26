import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@rainbow-me/rainbowkit/styles.css';
import { Providers } from './providers';
import './styles/globals.css';
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vent It",
  description: "Vent every one in this app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}   
        </Providers>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import { Footer, Navbar } from "@/components";
import {Providers} from './Providers';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HealthSync",
  description: "Terapia Alternativa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/atomo.svg" type="image/svg+xml" />
      </Head>
      <body className={inter.className}> {/* className='static'*/}
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
        
      </body>
    </html>
  );
}

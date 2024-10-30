import { Footer, Navbar } from "@/components";
import type { Metadata } from "next";
import Head from "next/head";
import './globals.css';

export const metadata: Metadata = {
  title: "The Online Store",
  description: "Best Online Store In Kannur,Kerala",
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
      </Head>
      <body
        className="relative"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

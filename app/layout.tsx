import { Footer, Navbar } from "@/components";
import { Provider } from "@/components/Provider";
import type { Metadata } from "next";
import './globals.css';

export const metadata: Metadata = {
  title: "The Online Store",
  description: "Best Online Store In Dubai, UAE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <html lang="en">
      <head>
        {/* Add external stylesheet link here */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
      </head>

      <body className="relative">
        <Provider>
          <Navbar />
            {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

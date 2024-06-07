import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Letters of Natsu",
  description: "A sanctuary of my daily musings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} flex flex-col min-h-screen px-4 bg-grid-small-neutral-400/[0.2] relative`}>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <Header />
        <div className="z-10">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

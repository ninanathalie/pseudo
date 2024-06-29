import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Letters Of Nathalie - A Sanctuary Of My Daily Musings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} flex flex-col min-h-screen px-4 bg-grid-small-neutral-400/[0.2] relative font-outfit`}>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

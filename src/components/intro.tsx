import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function Intro() {
  return (
    <section className="w-full h-full flex items-center justify-center flex-col">
      <div className="w-full px-10 mb-16 lg:mb-24">
        <div className="flex items-center justify-center gap-4 mb-2">
          <Image src="/images/home-img-1.jpg" alt="Intro Image" width="142" height="142" quality="95" priority={true} className="w-10 h-10 md:w-14 md:h-14 lg:w-24 lg:h-24 xl:w-30 xl:h-30 rounded-full object-cover" />
          <h1 className={`${syne.className} text-right text-[6.5vw] md:text-5xl lg:text-6xl xl:text-8xl font-bold uppercase`}>Hello there</h1>
        </div>
        <div className="flex items-center justify-center w-full gap-4 mb-2">
          <h1 className={`${syne.className} text-left text-[6.5vw] md:text-5xl lg:text-6xl xl:text-8xl font-bold uppercase`}>My name is</h1>
          <span className="hidden lg:flex text-xs font-light w-80 uppercase">This is a caboodle of my daily ramblings – an abode for my undistributed thoughts, serene thinking and tranquil ideas. Today, I welcome you to my blog, and these are my misadventures.</span>
        </div>
        <div className="flex items-center justify-center ml-auto gap-4">
          <h1 className={`${syne.className} text-right text-[6.5vw] md:text-5xl lg:text-6xl xl:text-8xl font-bold uppercase`}>Nathalie</h1>
          <Image src="/images/home-img-2.jpg" alt="Intro Image" width="242" height="142" quality="95" priority={true} className="w-20 h-10 md:w-28 md:h-14 lg:w-32 lg:h-24 xl:w-44 xl:h-30  rounded-full object-cover" />
        </div>
        <span className="flex lg:hidden font-light text-center mt-10">This is a caboodle of my daily ramblings – an abode for my undistributed thoughts, serene thinking and tranquil ideas. Today, I welcome you to my blog, and these are my misadventures.</span>
      </div>
      <Link href="/blogs" className="flex flex-col items-center justify-center text-sm text-neutral-600 hover:text-neutral-900">
        READ BLOG <ArrowRight className="mt-2 h-4 w-4" />
      </Link>
    </section>
  );
}

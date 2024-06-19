import React from "react";
import { Syne } from "next/font/google";
import Image from "next/image";

const syne = Syne({ subsets: ["latin"] });

export default function Intro() {
  return (
    <section className="w-full h-full flex items-center justify-center">
      <div className="w-full px-10">
        <div className="flex items-center justify-center gap-4 mb-2">
          <Image src="/images/home-img-1.jpg" alt="Intro Image" width="142" height="142" quality="95" priority={true} className="w-24 h-24 xl:w-30 xl:h-30 rounded-full object-cover" />
          <h1 className={`${syne.className} text-right text-8xl font-bold uppercase`}>Hello there</h1>
        </div>
        <div className="flex items-center justify-center w-full gap-4 mb-2">
          <h1 className={`${syne.className}  text-left text-8xl font-bold uppercase`}>My name is</h1>
          <span className="text-xs font-light w-80 uppercase">This is a caboodle of my daily ramblings – an abode for my undistributed thoughts, serene thinking and tranquil ideas. Today, I welcome you to my blog, and these are my misadventures.</span>
        </div>
        <div className="flex items-center justify-center ml-auto gap-4">
          <h1 className={`${syne.className} text-right text-8xl font-bold uppercase`}>Nathalie</h1>
          <Image src="/images/home-img-2.jpg" alt="Intro Image" width="242" height="142" quality="95" priority={true} className="w-32 h-24 xl:w-44 xl:h-30 rounded-full object-cover" />
        </div>
      </div>
    </section>
  );
}

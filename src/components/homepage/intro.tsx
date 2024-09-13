"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import BackgroundBlob from "@/components/ui/background-blob";

export default function Intro() {
  const [typewriter] = useTypewriter({
    words: ["on the web"],
    loop: true,
  });

  return (
    <section className="relative flex items-center justify-center flex-col w-10/12 3xl:w-2/4 max-w-[1440px] mb-[20%] 4xl:mb-[10%]">
      <BackgroundBlob variant="top" />

      <Image src="/images/home-img-1.jpg" alt="Intro Image" width="142" height="142" quality="95" priority={true} className="w-24 h-24 xl:w-32 xl:h-32 rounded-full object-cover mb-6 md:mb-8" />

      <h1 className="font-polysans-bold text-center text-5xl lg:text-6xl xl:text-8xl font-bold mb-4 bg-gradient-to-t from-indigo-900 via-slate-900 to-slate-900 dark:from-indigo-100/80 dark:to-white bg-clip-text text-transparent">Hello, I'm Nathalie!</h1>
      <h2 className="font-ppcirka-regular text-center text-5xl lg:text-6xl xl:text-8xl mb-6 bg-gradient-to-t from-indigo-900 via-slate-900 to-slate-900 dark:from-indigo-100/80 dark:to-white bg-clip-text text-transparent">
        I like desigining and building <br className="hidden md:flex" /> things {typewriter} <Cursor />
      </h2>
      <p className="font-polysans-thin text-lg md:text-2xl text-center md:leading-10 dark:text-neutral-300">
        This space is a caboodle of my daily ramblings – an abode for my undistributed thoughts, serene thinking and tranquil ideas. Today, I welcome you to my blog, and these are my <strong className="font-polysans-bold">misadventures!</strong>
      </p>

      <div className="flex items-center justify-center mt-6 lg:mt-10 gap-4">
        <Link href="/blogs" className="font-polysans-regular text-md md:text-lg lg:text-xl px-6 py-3 text-white bg-neutral-950 dark:text-neutral-950 dark:bg-neutral-50 rounded-xl">
          Read blog
        </Link>
        <Link href="/about" className="font-polysans-regular text-md md:text-lg lg:text-xl px-6 py-3 text-neutral-950 bg-transparent border-2 border-neutral-950 dark:text-neutral-50 dark:border-neutral-50 rounded-xl font-bold">
          Get to know me
        </Link>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import BackgroundBlob from "@/components/ui/background-blob";

export default function Intro() {
  return (
    <section className="relative flex items-center justify-center flex-col w-10/12 3xl:w-2/4 max-w-[1440px] mb-[4%] 4xl:mb-[2%]">
      <BackgroundBlob variant="top" />

      <Image src="/images/home-img-1.jpg" alt="Intro Image" width="142" height="142" quality="95" priority={true} className="w-24 h-24 xl:w-32 xl:h-32 rounded-full object-cover mb-6 md:mb-8" />

      <h1 className="font-polysans-bold text-center text-5xl md:text-6xl lg:text-8xl font-bold mb-2 md:mb-4">Hello, I'm Nathalie</h1>
      <h2 className="font-ppcirka-regular text-center text-2xl md:text-4xl xl:text-5xl mb-6">I like to write, design and code</h2>
      <p className="lg:w-[80%] 2xl:w-[70%] font-light md:text-lg lg:text-2xl text-center md:leading-8 lg:leading-10 dark:text-neutral-300">
        This space is a caboodle of my daily ramblings – an abode for my undistributed thoughts, serene thinking and tranquil ideas. Today, I welcome you to my blog, and these are my misadventures!
      </p>

      <div className="flex items-center justify-center mt-6 lg:mt-10 gap-4">
        <Link href="/blogs" className="text-md md:text-lg lg:text-xl px-6 py-3 text-white bg-neutral-950 dark:text-neutral-950 dark:bg-neutral-50 rounded-xl">
          Read blog
        </Link>
        <Link href="/about" className="text-md md:text-lg lg:text-xl px-6 py-3 text-neutral-950 bg-transparent border-2 border-neutral-950 dark:text-neutral-50 dark:border-neutral-50 rounded-xl">
          Get to know me
        </Link>
      </div>
    </section>
  );
}

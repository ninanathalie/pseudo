"use client";

import React from "react";
import Image from "next/image";
import BackgroundBlob from "@/components/ui/background-blob";
import { HyperText } from "@/components/ui/hyper-text";
import { BlurFade } from "@/components/ui/blur-fade";
import { Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function Intro() {
  return (
    <section className="relative flex items-center justify-center flex-col w-10/12 3xl:w-2/4 max-w-[1440px] mb-[4%] 4xl:mb-[2%]">
      <BackgroundBlob variant="top" />

      <BlurFade delay={0.25} inView>
        <div className="flex items-center justify-center flex-col">
          <Image src="/images/home-img-1.png" alt="Intro Image" width="420" height="420" quality="95" priority={true} className="w-24 h-24 xl:w-36 xl:h-36 object-cover md:mb-6" />

          <HyperText className={`${spaceMono.className} text-center text-md md:text-2xl tracking-tighter md:mb-2 lg:mb-6`} text={`while(!(succeed=try())){}`} />

          <h1 className="font-polysans-bold text-center text-4xl md:text-6xl lg:text-8xl font-bold mb-4">Hello, I'm Nathalie</h1>

          <p className="lg:w-[80%] 4xl:w-[60%] font-light md:text-lg 2xl:text-xl text-center md:leading-8 2xl:leading-9 dark:text-neutral-300">
            This space is a caboodle of my daily ramblings – an abode for my undistributed thoughts, pseudo pensieve and infinite loops. Today, I welcome you to my blog, and these are my misadventures!
          </p>
        </div>
      </BlurFade>
    </section>
  );
}

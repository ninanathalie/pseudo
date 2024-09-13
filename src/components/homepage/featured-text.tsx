"use client";

import React, { useEffect, useState } from "react";
import Particles from "@/components/ui/particles";
import { useTheme } from "next-themes";
import BackgroundBlob from "@/components/ui/background-blob";

export default function FeaturedText() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <section className="relative w-10/12 3xl:w-2/4 max-w-[1440px] pb-28 lg:pb-44 2xl:pb-60">
      <BackgroundBlob variant="bottom" />

      <div className="relative w-full flex justify-center items-center">
        <div className="absolute flex justify-center items-center w-full h-full z-0">
          <span className="font-polysans-bold text-center text-[4.2rem] md:text-[8rem] xl:text-[12rem] font-bold mb-4 tracking-[-0.09em] leading-none">do it scared</span>
        </div>
        <img src="/images/home-img-3.jpg" alt="do-it-scared" className="max-w-[80%] lg:max-w-[50%]" />

        <Particles className="absolute inset-0" quantity={100} ease={80} color={color} refresh />
      </div>
    </section>
  );
}

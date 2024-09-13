import React from "react";
import Marquee from "../ui/marquee";

export default function MovingText() {
  return (
    <section className="relative -mx-4 flex flex-col w-full overflow-hidden py-28 lg:py-44 2xl:py-60">
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        <div className="flex gap-4">
          <TextStroke>Tech Enthusiast</TextStroke>
          <TextFilled>Bipolar Writer</TextFilled>
        </div>
      </Marquee>

      <Marquee pauseOnHover className="[--duration:20s]">
        <div className="flex gap-4">
          <TextFilled>Casual Otaku</TextFilled>
          <TextStroke>Bipolar Writer</TextStroke>
        </div>
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:20s]">
        <div className="flex gap-4">
          <TextStroke>Casual Otaku</TextStroke>
          <TextFilled>Tech Enthusiast</TextFilled>
        </div>
      </Marquee>
    </section>
  );
}

export function TextStroke({ children }: { children: string }) {
  return (
    <span className={`font-polysans-bold text-center text-6xl lg:text-8xl xl:text-9xl font-bold mb-4 stroke-current`} style={{ WebkitTextFillColor: "transparent", WebkitTextStroke: "1.5px" }}>
      {children}
    </span>
  );
}

export const TextFilled = ({ children }: { children: string }) => {
  return <span className="font-polysans-bold text-center text-6xl lg:text-8xl xl:text-9xl font-bold mb-4">{children}</span>;
};

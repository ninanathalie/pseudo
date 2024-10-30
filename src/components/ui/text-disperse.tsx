"use client";

import React, { useState, ReactNode } from "react";
import { motion } from "framer-motion";

const transforms = [
  { x: -0.4, y: -0.2, rotationZ: -22 },
  { x: -0.2, y: -0.3, rotationZ: -4 },
  { x: -0.05, y: 0.1, rotationZ: 12 },
  { x: -0.05, y: -0.1, rotationZ: -9 },
  { x: -0.1, y: 0.3, rotationZ: 3 },
  { x: 0, y: -0.1, rotationZ: 9 },
  { x: 0, y: 0.15, rotationZ: -12 },
  { x: 0, y: 0.15, rotationZ: -17 },
  { x: 0, y: -0.65, rotationZ: 9 },
  { x: 0.1, y: 0.4, rotationZ: 12 },
  { x: 0, y: -0.15, rotationZ: -9 },
  { x: 0.2, y: 0.15, rotationZ: 12 },
  { x: 0.4, y: 0.4, rotationZ: 15 },
];

const disperse = {
  open: (i: number) => ({
    x: `${transforms[i % transforms.length].x}em`,
    y: `${transforms[i % transforms.length].y}em`,
    rotateZ: transforms[i % transforms.length].rotationZ,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
    zIndex: 1,
  }),
  closed: {
    x: 0,
    y: 0,
    rotateZ: 0,
    transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1] },
    zIndex: 0,
  },
};

interface TextDisperseProps {
  children: ReactNode;
}

export const TextDisperse = ({ children }: TextDisperseProps) => {
  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element: ReactNode) => {
    const word = element as string;
    return word.split("").map((char, i) => (
      <motion.p custom={i} variants={disperse} animate={isAnimated ? "open" : "closed"} key={`${char}-${i}`} className="font-polysans-bold text-center text-5xl lg:text-8xl">
        {char}
      </motion.p>
    ));
  };

  const handleMouseEnter = () => setIsAnimated(true);
  const handleMouseLeave = () => setIsAnimated(false);

  return (
    <div style={{ cursor: "pointer" }} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="introLine flex flex-row py-1">
      {getChars(children)}
    </div>
  );
};

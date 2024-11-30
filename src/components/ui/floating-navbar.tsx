"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence, MotionValue } from "framer-motion";

interface FloatingNavItem {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  component?: React.ReactNode;
  className?: string;
}

interface FloatingNavProps {
  items: FloatingNavItem[];
  className?: string;
}

export const FloatingNav = ({ items, className }: FloatingNavProps) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div onMouseMove={(e) => mouseX.set(e.pageX)} onMouseLeave={() => mouseX.set(Infinity)} className={cn("group mx-auto flex h-16 gap-2 md:gap-3 items-start rounded-2xl bg-neutral-50 dark:bg-slate-950/90 px-4 pt-3", className)}>
      {items.map((item) => (
        <IconContainer key={item.title} mouseX={mouseX} {...item} />
      ))}
    </motion.div>
  );
};

const IconContainer = ({ mouseX, title, icon, href, component }: FloatingNavItem & { mouseX: MotionValue<number> }) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const width = useSpring(useTransform(distance, [-150, 0, 150], [42, 70, 42]), { mass: 0.1, stiffness: 150, damping: 12 });
  const height = useSpring(useTransform(distance, [-150, 0, 150], [42, 70, 42]), { mass: 0.1, stiffness: 150, damping: 12 });
  const iconSize = useSpring(useTransform(distance, [-150, 0, 150], [20, 40, 20]), { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <motion.div ref={ref} style={{ width, height }} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} className="aspect-square rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center relative">
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 2, x: "-50%" }}
            className="px-2 py-0.5 whitespace-pre rounded-md bg-neutral-100 dark:bg-neutral-800 absolute left-1/2 -translate-x-1/2 -bottom-8 w-fit text-xs"
          >
            {title}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div style={{ width: iconSize, height: iconSize }} className="flex items-center justify-center">
        {href ? <Link href={href}>{icon}</Link> : component}
      </motion.div>
    </motion.div>
  );
};

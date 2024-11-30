"use client";

import { useTheme } from "@/context/theme-context";
import { Moon, Sun } from "lucide-react";
import React from "react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div onClick={toggleTheme} className="infline-flex flex items-center cursor-pointer after:absolute after:inset-0">
      {theme === "light" ? <Sun className="w-4 h-4 md:w-full md:h-full" /> : <Moon className="w-4 h-4 md:w-full md:h-full" />}
    </div>
  );
}

"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // избежание mismatch при SSR

  const isDark = theme === "dark";

  return isDark ? (
    <Sun
      onClick={() => setTheme("light")}
      size={20}
      className="cursor-pointer text-yellow-400 transition"
    />
  ) : (
    <Moon
      onClick={() => setTheme("dark")}
      size={20}
      className="cursor-pointer text-yellow-400 transition"
    />
  );
};

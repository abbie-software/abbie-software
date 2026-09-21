"use-client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);

    if (!mounted) {
        return <div className="h-9 w-9" />;
      }
      const isDark = theme === "dark";
      return (
        <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        aria-label="Toggle theme"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-abbie-purple/30 text-abbie-pink transition-colors hover:bg-abbie-purple/10"
    >
        {isDark ? <Sun size={18} /> : <Moon size = {18} />}
    </button> 
      );
}
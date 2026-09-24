"use client";

import { useEffect } from "react";

export function useConsoleEasterEgg() {
  useEffect(() => {
    console.log(
      "%c👋 Hey, curious developer!",
      "color: #ec4899; font-size: 20px; font-weight: bold;"
    );
    console.log(
      "%cSince you're already in devtools poking around — I like your style. Let's connect: linkedin.com/in/abigail-gathoni",
      "color: #a855f7; font-size: 14px;"
    );
  }, []);
}

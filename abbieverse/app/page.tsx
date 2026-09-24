"use client";

import { useState } from "react";
import IntroLoader from "@/src/components/intro-loader";
import { ThemeToggle } from "@/src/components/theme-toggle";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}
      {introDone && (
        <main className="flex min-h-screen flex-col items-center justify-center gap-6">
          <h1 className="text-3xl">Main site coming next </h1>
          <ThemeToggle />
        </main>
      )}
    </>
  );
}
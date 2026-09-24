"use client";

import { useState } from "react";
import IntroLoader from "@/src/components/intro-loader";
import { ThemeToggle } from "@/src/components/theme-toggle";
import {Navbar} from "@/src/components/navbar";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}
      {introDone && (
       <>
          <Navbar />
          <main id="home" className="flex min-h-screen flex-col items-center justify-center gap-6">
            <h1 className="text-3xl">Sections coming next 🚀</h1>
          </main>
        </>
      )}
    </>
  );
}
"use client";

import { useState } from "react";
import IntroLoader from "@/src/components/intro-loader";
import { ThemeToggle } from "@/src/components/theme-toggle";
import {Navbar} from "@/src/components/navbar";
import HeroSection from "@/src/components/sections/hero";
import AboutSection  from "@/src/components/sections/about";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}
      {introDone && (
       <>
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
          </main>
        </>
      )}
    </>
  );
}
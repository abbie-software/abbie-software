"use client";

import { useState } from "react";
import IntroLoader from "@/src/components/intro-loader";
import { ThemeToggle } from "@/src/components/theme-toggle";
import {Navbar} from "@/src/components/navbar";
import HeroSection from "@/src/components/sections/hero";
import AboutSection  from "@/src/components/sections/about";
import SkillsSection from "@/src/components/sections/skills";
import CertificationsSection from "@/src/components/sections/certifications";
import AchievementsSection from "@/src/components/sections/achievements";
import EducationSection from "@/src/components/sections/education";
import ProjectsSection from "@/src/components/sections/projects";
import ContactSection from "@/src/components/sections/contact";
import { Footer } from "@/src/components/footer";
import Particles from "@/src/components/particles";

export default function Home() {
  const [introDone, setIntroDone] = useState(false);

  return (
    <>
      {!introDone && <IntroLoader onComplete={() => setIntroDone(true)} />}
      {introDone && (
       <>
       <Particles quantity={700} color="2, 72, 153"/>
          <Navbar />
          <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <CertificationsSection />
            <AchievementsSection />
            <EducationSection/>
            <ContactSection />
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
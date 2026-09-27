"use client";

import Link from "next/link";
import Image from "next/image";
import { FileText } from "lucide-react";
import { FaLinkedin } from "react-icons/fa6";
import { SiGithub, SiX } from "react-icons/si";
import { motion } from "framer-motion";
import { config } from "@/src/data/config";
import { useConsoleEasterEgg } from "@/src/hooks/use-console-easter-egg";

const [firstName, ...rest] = config.author.split(" ");
const lastName = rest.join(" ");

export default function HeroSection() {
  useConsoleEasterEgg();

  return (
    <section
      id="home"
      className="relative grid min-h-screen w-full grid-cols-1 items-center px-6 pt-24 md:grid-cols-2 md:px-16"
    >
      <div className="z-10 flex flex-col items-start">
        <motion.p
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-abbie-text/60 sm:text-xl"
        >
          Hi, I am
        </motion.p>

        <div className="group relative">
          <motion.h1
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="-ml-1 text-6xl font-bold leading-none text-abbie-text sm:text-7xl md:text-8xl"
          >
            {firstName}
            <br />
            {lastName}
          </motion.h1>
          <div className="pointer-events-none absolute -top-9 left-0 rounded-md bg-abbie-text px-3 py-1 text-xs text-abbie-bg opacity-0 transition-opacity duration-200 group-hover:opacity-100">
            there&apos;s something waiting for you in devtools 👀
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, filter: "blur(6px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-4 text-lg text-abbie-text/60 sm:text-xl"
        >
          {config.role}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 flex flex-col gap-3"
        >
          <Link
            href="/resume"
            className="flex items-center justify-center gap-2 rounded-full bg-abbie-pink px-6 py-3 font-medium text-white transition-transform hover:scale-105"
          >
            <FileText size={18} /> Resume
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full border border-abbie-purple/40 px-6 py-3 font-medium text-abbie-text transition-colors hover:bg-abbie-purple/10"
            >
              Hire Me
            </a>

            <a
              href={config.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-abbie-purple/40 text-abbie-text transition-colors hover:bg-abbie-purple/10"
              aria-label="GitHub"
            >
              <SiGithub size={20} />
            </a>
            <a
              href={config.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-abbie-purple/40 text-abbie-text transition-colors hover:bg-abbie-purple/10"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            {config.social.twitter && (
              <a
                href={config.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-abbie-purple/40 text-abbie-text transition-colors hover:bg-abbie-purple/10"
                aria-label="X / Twitter"
              >
                <SiX size={20} />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative hidden items-center justify-center md:flex"
      >
        <div className="relative h-[380px] w-[380px]">
          <div
            className="absolute inset-0 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--color-abbie-pink) 0%, var(--color-abbie-purple) 50%, transparent 75%)",
              opacity: 0.35,
            }}
          />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-full w-full overflow-hidden rounded-[2rem] border border-abbie-purple/30 shadow-[0_0_60px_rgba(168,85,247,0.25)]"
          >
            <Image
              src="/images/profile.jpeg"
              alt={config.author}
              fill
              sizes="380px"
              className="object-cover"
              priority
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-abbie-text/40"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v16m0 0l-6-6m6 6l6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
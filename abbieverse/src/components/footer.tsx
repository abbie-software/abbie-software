"use client";

import { useEffect, useState } from "react";
import { Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import { config } from "@/src/data/config";

export function Footer() {
  const [year, setYear] = useState<number | null>(null);
  useEffect(() => setYear(new Date().getFullYear()), []);

  return (
    <footer className="flex w-full flex-col items-center gap-4 border-t border-abbie-purple/20 px-6 py-8 sm:flex-row sm:justify-between md:px-16">
      <p className="text-xs text-abbie-text/50">
        © {year ?? ""} {config.author}. All rights reserved.
      </p>
      <div className="flex items-center gap-5">
        <a
          href={config.social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-abbie-text/60 transition-colors hover:text-abbie-pink"
        >
          <SiGithub size={18} />
        </a>
        <a
          href={config.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-abbie-text/60 transition-colors hover:text-abbie-pink"
        >
          <FaLinkedin size={18} />
        </a>
        <a
          href={`mailto:${config.email}`}
          aria-label="Email"
          className="text-abbie-text/60 transition-colors hover:text-abbie-pink"
        >
          <Mail size={18} />
        </a>
      </div>
    </footer>
  );
}
"use client";

import { motion } from "framer-motion";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

const panelVariants = {
  hidden: { clipPath: "circle(0% at calc(100% - 40px) 40px)" },
  visible: {
    clipPath: "circle(150% at calc(100% - 40px) 40px)",
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] as const },
  },
  exit: {
    clipPath: "circle(0% at calc(100% - 40px) 40px)",
    transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const },
  },
};

const linkListVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.25 } },
};

const linkVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export function NavOverlay({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.div
      variants={panelVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="fixed inset-0 z-40 flex flex-col justify-between bg-abbie-dark px-8 py-24 sm:px-16"
    >
      <motion.nav
        variants={linkListVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-1 flex-col items-start justify-center gap-3"
      >
        {NAV_LINKS.map((link) => (
          <motion.a
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            variants={linkVariants}
            className="text-4xl font-semibold text-abbie-text/80 transition-colors hover:text-abbie-pink sm:text-6xl"
          >
            {link.label}
          </motion.a>
        ))}
      </motion.nav>

      <motion.div
        variants={linkVariants}
        className="flex items-center gap-6 border-t border-abbie-purple/20 pt-6"
      >
        <a
          href="https://github.com/abbie-software"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-abbie-text/60 hover:text-abbie-pink"
        >
          <Code2 size={18} /> GitHub
        </a>
        <a
          href="https://linkedin.com/in/abigail-gathoni"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm text-abbie-text/60 hover:text-abbie-pink"
        >
          <BriefcaseBusiness size={18} /> LinkedIn
        </a>
        <a
          href="mailto:abigailgathoni5@gmail.com"
          className="flex items-center gap-2 text-sm text-abbie-text/60 hover:text-abbie-pink"
        >
          <Mail size={18} /> Email
        </a>
      </motion.div>
    </motion.div>
  );
}
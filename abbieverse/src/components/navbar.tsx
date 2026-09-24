"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { NavOverlay } from "./nav-overlay";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#home"
          onClick={() => setOpen(false)}
          className="text-lg font-bold tracking-tight text-abbie-text"
        >
          Abbie<span className="text-abbie-pink">verse</span>
        </a>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            className="relative z-50 flex h-9 w-9 items-center justify-center rounded-full border border-abbie-purple/30 text-abbie-text transition-colors hover:bg-abbie-purple/10"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "menu"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {open ? <X size={18} /> : <Menu size={18} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && <NavOverlay onNavigate={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MousePointerClick } from "lucide-react";

const STORAGE_KEY = "abbieverse-rightclick-hint-seen";

export function RightClickHint({ dismissed }: { dismissed: boolean }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(STORAGE_KEY);
    if (!seen) {
      const t = setTimeout(() => setShow(true), 2500);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (dismissed && show) {
      setShow(false);
      localStorage.setItem(STORAGE_KEY, "true");
    }
  }, [dismissed, show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-6 left-1/2 z-40 flex -translate-x-1/2 items-center gap-2 rounded-full border border-abbie-purple/30 bg-abbie-bg/90 px-4 py-2 text-xs text-abbie-text/70 shadow-lg backdrop-blur-sm"
        >
          <MousePointerClick size={14} className="text-abbie-pink" />
          Try holding right-click anywhere
        </motion.div>
      )}
    </AnimatePresence>
  );
}
"use client";

import { motion } from "framer-motion";
import type { ShockwaveData } from "./types";

export function Shockwave({ data }: { data: ShockwaveData }) {
  return (
    <motion.div
      className="pointer-events-none fixed z-[9998]"
      style={{ left: data.x, top: data.y, translateX: "-50%", translateY: "-50%" }}
    >
      <motion.div
        className="rounded-full border-2"
        style={{ borderColor: data.color }}
        initial={{ width: 0, height: 0, opacity: 0.8 }}
        animate={{ width: 180, height: 180, opacity: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      />
      <motion.span
        className="absolute left-1/2 top-1/2 text-3xl"
        style={{ translateX: "-50%", translateY: "-50%" }}
        initial={{ scale: 0.3, opacity: 1 }}
        animate={{ scale: 1.6, opacity: 0, y: -40 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {data.emoji}
      </motion.span>
    </motion.div>
  );
}
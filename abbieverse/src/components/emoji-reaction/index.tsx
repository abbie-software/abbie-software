"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import type { MenuItem, Position, ShockwaveData } from "./types";
import { Shockwave } from "./shockwave";
import { RightClickHint } from "./right-click-hint";

const MENU_ITEMS: MenuItem[] = [
  { id: "love", emoji: "❤️", label: "Love", color: "#ec4899" },
  { id: "laugh", emoji: "😂", label: "Haha", color: "#fbbf24" },
  { id: "wow", emoji: "😮", label: "Wow", color: "#a855f7" },
  { id: "sad", emoji: "😢", label: "Sad", color: "#60a5fa" },
  { id: "fire", emoji: "🔥", label: "Lit", color: "#f97316" },
  { id: "star", emoji: "⭐", label: "Star", color: "#f9a8d4" },
];

const DEAD_ZONE = 20;
const MAX_INTENSITY_DIST = 300;
const RADIUS = 90;
const INTERACTIVE_SELECTOR = "a, button, input, textarea, select, [contenteditable]";

function getDistance(p1: Position, p2: Position) {
  return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
}

function getAngle(origin: Position, target: Position) {
  return (Math.atan2(target.y - origin.y, target.x - origin.x) * 180) / Math.PI;
}

export default function EmojiReaction() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuPos, setMenuPos] = useState<Position>({ x: 0, y: 0 });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [shockwaves, setShockwaves] = useState<ShockwaveData[]>([]);

  const isOpenRef = useRef(false);
  const menuPosRef = useRef<Position>({ x: 0, y: 0 });
  const activeIndexRef = useRef<number | null>(null);
  const suppressMenuRef = useRef(false);

  useEffect(() => {
    isOpenRef.current = isOpen;
    menuPosRef.current = menuPos;
    activeIndexRef.current = activeIndex;
  }, [isOpen, menuPos, activeIndex]);

  const fireConfetti = useCallback((pageX: number, pageY: number, emoji: string) => {
    const originX = (pageX - window.scrollX) / window.innerWidth;
    const originY = (pageY - window.scrollY) / window.innerHeight;
    const shape = confetti.shapeFromText({ text: emoji, scalar: 2.5 });

    confetti({
      particleCount: 24,
      spread: 70,
      origin: { x: originX, y: originY },
      shapes: [shape],
      scalar: 2.5,
      disableForReducedMotion: true,
      zIndex: 9999,
      startVelocity: 30,
      gravity: 0.8,
    });
  }, []);

  const spawnShockwave = useCallback((x: number, y: number, color: string, emoji: string) => {
    const id = `${Date.now()}-${Math.random()}`;
    setShockwaves((prev) => [...prev, { id, x, y, color, emoji }]);
    setTimeout(() => setShockwaves((prev) => prev.filter((s) => s.id !== id)), 900);
  }, []);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (e.button !== 2) return;
    const target = e.target as HTMLElement;
    if (target.closest(INTERACTIVE_SELECTOR)) return;

    suppressMenuRef.current = true;
    setMenuPos({ x: e.clientX, y: e.clientY });
    setIsOpen(true);
    setActiveIndex(null);
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isOpenRef.current) return;
    const current = { x: e.clientX, y: e.clientY };
    const origin = menuPosRef.current;
    const dist = getDistance(origin, current);

    if (dist < DEAD_ZONE) {
      if (activeIndexRef.current !== null) setActiveIndex(null);
      return;
    }

    const angle = getAngle(origin, current);
    const count = MENU_ITEMS.length;
    const normalized = ((angle + 90) % 360 + 360) % 360;
    const index = Math.floor(normalized / (360 / count));

    if (activeIndexRef.current !== index) setActiveIndex(index);
  }, []);

 const handleMouseUp = useCallback(
  (e: MouseEvent) => {
    if (!isOpenRef.current) return;

    if (activeIndexRef.current !== null) {
      const item = MENU_ITEMS[activeIndexRef.current];
      fireConfetti(e.pageX, e.pageY, item.emoji);
      spawnShockwave(e.clientX, e.clientY, item.color, item.emoji);

      fetch("/api/reaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: item.emoji, label: item.label }),
      }).catch(() => {
        // silently ignore — a failed notification shouldn't interrupt the visitor's experience
      });
    }

    setIsOpen(false);
    setActiveIndex(null);
  },
  [fireConfetti, spawnShockwave]
);
  const handleContextMenu = useCallback((e: MouseEvent) => {
    if (suppressMenuRef.current) {
      e.preventDefault();
      suppressMenuRef.current = false;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("contextmenu", handleContextMenu);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("contextmenu", handleContextMenu);
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp, handleContextMenu]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="pointer-events-none fixed z-[9999]"
            style={{ left: menuPos.x, top: menuPos.y }}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.15 }}
          >
            {MENU_ITEMS.map((item, i) => {
              const angleDeg = (360 / MENU_ITEMS.length) * i - 90;
              const rad = (angleDeg * Math.PI) / 180;
              const x = Math.cos(rad) * RADIUS;
              const y = Math.sin(rad) * RADIUS;
              const active = activeIndex === i;

              return (
                <motion.div
                  key={item.id}
                  className="absolute flex h-12 w-12 items-center justify-center rounded-full border text-2xl shadow-lg"
                  style={{
                    left: x,
                    top: y,
                    translateX: "-50%",
                    translateY: "-50%",
                    backgroundColor: active ? item.color : "rgba(10,5,18,0.9)",
                    borderColor: item.color,
                  }}
                  animate={{ scale: active ? 1.3 : 1 }}
                  transition={{ duration: 0.15 }}
                >
                  {item.emoji}
                </motion.div>
              );
            })}
            <div className="absolute h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-abbie-pink" />
          </motion.div>
        )}
      </AnimatePresence>

      {shockwaves.map((sw) => (
        <Shockwave key={sw.id} data={sw} />
      ))}

      <RightClickHint dismissed={isOpen} />
    </>
  );
}
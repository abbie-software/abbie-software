import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AnimatedFlower from './AnimatedFlower'

interface IntroLoaderProps {
  onComplete: () => void
}

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'loading' | 'welcome' | 'done'>('loading')

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          return 100
        }
        return p + Math.floor(Math.random() * 4) + 1
      })
    }, 60)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (progress >= 100) {
      const t1 = setTimeout(() => setPhase('welcome'), 300)
      const t2 = setTimeout(() => setPhase('done'), 2200)
      const t3 = setTimeout(() => onComplete(), 2900)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
        clearTimeout(t3)
      }
    }
  }, [progress, onComplete])

  const radius = 90
  const circumference = 2 * Math.PI * radius

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-abbie-bg"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {/* background flower, visible through the dark overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-60 blur-sm">
            <AnimatedFlower size={700} />
          </div>

          {/* the 50% opacity dark screen */}
          <div className="absolute inset-0 bg-black/50" />

          <div className="relative z-10 flex flex-col items-center gap-8">
            <AnimatePresence mode="wait">
              {phase === 'loading' && (
                <motion.div
                  key="ring"
                  className="relative flex items-center justify-center"
                  exit={{ opacity: 0, scale: 0.8 }}
                >
                  <svg width={200} height={200} className="-rotate-90">
                    <circle cx={100} cy={100} r={radius} stroke="rgba(255,255,255,0.1)" strokeWidth={4} fill="none" />
                    <circle
                      cx={100}
                      cy={100}
                      r={radius}
                      stroke="url(#ringGradient)"
                      strokeWidth={4}
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference - (circumference * progress) / 100}
                      style={{ transition: 'stroke-dashoffset 0.2s ease' }}
                    />
                    <defs>
                      <linearGradient id="ringGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="var(--color-abbie-pink)" />
                        <stop offset="100%" stopColor="var(--color-abbie-purple)" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* rocket-style particle trail */}
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className="absolute h-1.5 w-1.5 rounded-full bg-abbie-pink-light"
                      style={{ top: '50%', left: '50%' }}
                      animate={{
                        x: [0, Math.cos((i / 6) * Math.PI * 2) * 100],
                        y: [0, Math.sin((i / 6) * Math.PI * 2) * 100],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.8,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeInOut',
                      }}
                    />
                  ))}

                  <span className="text-2xl font-semibold text-white">{Math.min(progress, 100)}%</span>
                </motion.div>
              )}

              {phase === 'welcome' && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className="text-center"
                >
                  <h1 className="bg-gradient-to-r from-abbie-pink-light via-abbie-pink to-abbie-purple bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
                    Welcome to Abbieverse
                  </h1>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
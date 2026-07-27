import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface IntroLoaderProps {
  onComplete: () => void
}

const BOOT_LINES = [
  'initializing abbieverse_os v2.5.0',
  'loading kernel modules: react, typescript, tailwind',
  'mounting filesystem: /projects /skills /experience',
  'establishing secure connection ... ok',
  'compiling frontend assets',
  'running integrity checks ... passed',
  'spinning up render engine',
  'system ready',
]

const TYPE_SPEED = 25// ms per character
const LINE_PAUSE = 150 // ms pause after each line completes

export default function IntroLoader({ onComplete }: IntroLoaderProps) {
  const [visibleLines, setVisibleLines] = useState<string[]>([])
  const [currentText, setCurrentText] = useState('')
  const [linesDone, setLinesDone] = useState(false)
  const [progress, setProgress] = useState(0)
  const [phase, setPhase] = useState<'boot' | 'welcome' | 'done'>('boot')

  // type out boot lines one by one
  useEffect(() => {
    let lineIndex = 0
    let charIndex = 0
    let cancelled = false

    function typeNextChar() {
      if (cancelled) return
      const line = BOOT_LINES[lineIndex]
      if (charIndex <= line.length) {
        setCurrentText(line.slice(0, charIndex))
        charIndex++
        setTimeout(typeNextChar, TYPE_SPEED)
      } else {
        setVisibleLines((prev) => [...prev, line])
        setCurrentText('')
        lineIndex++
        charIndex = 0
        if (lineIndex < BOOT_LINES.length) {
          setTimeout(typeNextChar, LINE_PAUSE)
        } else {
          setLinesDone(true)
        }
      }
    }
    typeNextChar()
    return () => {
      cancelled = true
    }
  }, [])

  // once boot lines are done, run the progress bar
  useEffect(() => {
    if (!linesDone) return
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval)
          return 100
        }
        return p + Math.floor(Math.random() * 6) + 2
      })
    }, 45)
    return () => clearInterval(interval)
  }, [linesDone])

  useEffect(() => {
    if (progress >= 100) {
      const t1 = setTimeout(() => setPhase('welcome'), 300)
      const t2 = setTimeout(() => setPhase('done'), 2400)
      const t3 = setTimeout(() => onComplete(), 3100)
      return () => {
        clearTimeout(t1)
        clearTimeout(t2)
        clearTimeout(t3)
      }
    }
  }, [progress, onComplete])

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-abbie-bg font-mono"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* faint scanline / grid backdrop */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(236,72,153,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(168,85,247,0.6) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="absolute inset-0 bg-black/50" />

          <motion.div
            className="absolute h-[500px] w-[500px] rounded-full blur-3xl"
            style={{
              background:
                'radial-gradient(circle, var(--color-abbie-pink) 0%, var(--color-abbie-purple) 50%, transparent 75%)',
            }}
            animate={{ opacity: [0.12, 0.25, 0.12] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="relative z-10 w-full max-w-xl px-6">
            <AnimatePresence mode="wait">
              {phase === 'boot' && (
                <motion.div
                  key="boot"
                  exit={{ opacity: 0, y: -10 }}
                  className="rounded-lg border border-abbie-purple/30 bg-black/40 p-5 shadow-[0_0_40px_rgba(168,85,247,0.15)] backdrop-blur-sm"
                >
                  <div className="mb-3 flex items-center gap-2 border-b border-white/10 pb-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-abbie-pink" />
                    <span className="h-2.5 w-2.5 rounded-full bg-abbie-pink-light" />
                    <span className="h-2.5 w-2.5 rounded-full bg-abbie-purple" />
                    <span className="ml-2 text-xs text-white/40">abbieverse — boot sequence</span>
                  </div>

                  <div className="min-h-[220px] text-[13px] leading-relaxed sm:text-sm">
                    {visibleLines.map((line, i) => (
                      <div key={i} className="text-abbie-pink-light/90">
                        <span className="text-abbie-purple">$</span> {line}
                        <span className="ml-2 text-emerald-400">✓</span>
                      </div>
                    ))}
                    {!linesDone && (
                      <div className="text-abbie-pink-light/90">
                        <span className="text-abbie-purple">$</span> {currentText}
                        <span className="animate-pulse">▊</span>
                      </div>
                    )}
                  </div>

                  {linesDone && (
                    <div className="mt-4">
                      <div className="mb-1.5 flex justify-between text-xs text-white/50">
                        <span>booting interface</span>
                        <span>{Math.min(progress, 100)}%</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-abbie-pink via-abbie-pink-light to-abbie-purple"
                          style={{ width: `${Math.min(progress, 100)}%` }}
                          transition={{ ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {phase === 'welcome' && (
                <motion.div
                  key="welcome"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="text-center"
                >
                  <p className="mb-2 text-xs uppercase tracking-[0.3em] text-abbie-purple">
                    system ready
                  </p>
                  <h1 className="bg-gradient-to-r from-abbie-pink-light via-abbie-pink to-abbie-purple bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl">
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
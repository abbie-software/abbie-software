import { motion } from 'framer-motion'

const PETAL_COUNT = 8

export default function AnimatedFlower({ size = 400 }: { size?: number }) {
  const petals = Array.from({ length: PETAL_COUNT })

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 40, ease: 'linear' }}
    >
      {/* pulsing outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl"
        style={{
          background:
            'radial-gradient(circle, var(--color-abbie-pink) 0%, var(--color-abbie-purple) 45%, transparent 70%)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.65, 0.4] }}
        transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
      />

      {/* petals + core (this is the part that "blooms" on hover) */}
      <motion.div
        className="relative"
        style={{ width: size * 0.6, height: size * 0.6 }}
        initial="rest"
        whileHover="bloom"
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
      >
        {petals.map((_, i) => {
          const angle = (360 / PETAL_COUNT) * i
          return (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 origin-bottom"
              style={{
                width: size * 0.16,
                height: size * 0.32,
                marginLeft: -(size * 0.08),
                marginTop: -(size * 0.32),
                borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                background:
                  'linear-gradient(180deg, var(--color-abbie-pink-light), var(--color-abbie-purple))',
                boxShadow: '0 0 25px rgba(236,72,153,0.55)',
                rotate: angle,
              }}
              variants={{
                rest: { scaleY: 1, opacity: 0.85 },
                bloom: { scaleY: 1.3, opacity: 1 },
              }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.03 }}
            />
          )
        })}

        {/* glowing core */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: size * 0.14,
            height: size * 0.14,
            marginLeft: -(size * 0.07),
            marginTop: -(size * 0.07),
            background:
              'radial-gradient(circle, #fff 0%, var(--color-abbie-pink) 60%, var(--color-abbie-purple) 100%)',
            boxShadow: '0 0 40px rgba(236,72,153,0.8)',
          }}
        />
      </motion.div>
    </motion.div>
  )
}
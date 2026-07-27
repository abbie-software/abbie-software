import { motion } from 'framer-motion'

const PETAL_COUNT = 8

export default function AnimatedFlower({ size = 400 }: { size?: number }) {
  const petals = Array.from({ length: PETAL_COUNT })

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size, transformStyle: 'preserve-3d' }}
        animate={{ rotateY: 360, rotateX: [8, -8, 8] }}
        transition={{
          rotateY: { repeat: Infinity, duration: 40, ease: 'linear' },
          rotateX: { repeat: Infinity, duration: 6, ease: 'easeInOut' },
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl"
          style={{
            background:
              'radial-gradient(circle, var(--color-abbie-pink) 0%, var(--color-abbie-purple) 45%, transparent 70%)',
          }}
          animate={{ scale: [1, 1.15, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
        />

        {/* back ring of petals (further from camera = smaller, dimmer) */}
        <PetalRing size={size} scale={0.8} zOffset={-40} opacity={0.65} rotationOffset={22.5} />
        {/* front ring of petals */}
        <PetalRing size={size} scale={1} zOffset={20} opacity={1} rotationOffset={0} />

        {/* glossy core, with its own highlight for a bulb-like 3D feel */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: size * 0.16,
            height: size * 0.16,
            marginLeft: -(size * 0.08),
            marginTop: -(size * 0.08),
            transform: 'translateZ(40px)',
            background:
              'radial-gradient(circle at 35% 30%, #fff 0%, var(--color-abbie-pink) 45%, var(--color-abbie-purple) 100%)',
            boxShadow: '0 8px 30px rgba(0,0,0,0.5), 0 0 45px rgba(236,72,153,0.85)',
          }}
        />
      </motion.div>
    </div>
  )
}

function PetalRing({
  size,
  scale,
  zOffset,
  opacity,
  rotationOffset,
}: {
  size: number
  scale: number
  zOffset: number
  opacity: number
  rotationOffset: number
}) {
  const petals = Array.from({ length: PETAL_COUNT })

  return (
    <motion.div
      className="absolute"
      style={{ width: size * 0.6 * scale, height: size * 0.6 * scale, transformStyle: 'preserve-3d' }}
      initial="rest"
      whileHover="bloom"
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ repeat: Infinity, duration: 3.5, ease: 'easeInOut' }}
    >
      {petals.map((_, i) => {
        const angle = (360 / PETAL_COUNT) * i + rotationOffset
        return (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 origin-bottom"
            style={{
              width: size * 0.16 * scale,
              height: size * 0.32 * scale,
              marginLeft: -(size * 0.08 * scale),
              marginTop: -(size * 0.32 * scale),
              borderRadius: '50% 50% 50% 50% / 65% 65% 35% 35%',
              transform: `rotate(${angle}deg) translateZ(${zOffset}px)`,
              // highlight top-left, shadow bottom-right = real depth cue
              background:
                'linear-gradient(135deg, #ffffff 0%, var(--color-abbie-pink-light) 25%, var(--color-abbie-pink) 60%, var(--color-abbie-purple) 100%)',
              boxShadow: `0 6px 14px rgba(0,0,0,0.45), 0 0 20px rgba(236,72,153,0.4)`,
              opacity,
            }}
            variants={{
              rest: { scaleY: 1 },
              bloom: { scaleY: 1.3 },
            }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.03 }}
          />
        )
      })}
    </motion.div>
  )
}
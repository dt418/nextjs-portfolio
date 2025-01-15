'use client'

import { motion } from 'framer-motion'

const colors = ['#ff0080', '#7928ca', '#0070f3']

export function SlidingColorTransition({ isVisible }: Readonly<{ isVisible: boolean }>) {
  return (
    <>
      {colors.map((color, index) => (
        <motion.div
          key={color}
          className="fixed inset-0 z-50"
          initial={{ x: '100%' }}
          animate={{ x: isVisible ? '0%' : '-100%' }}
          transition={{
            duration: 0.5, // Reverted to 0.5 seconds
            ease: 'easeInOut',
            delay: index * 0.1,
          }}
          style={{ backgroundColor: color }}
        />
      ))}
    </>
  )
}


'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

export function PageTransition({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
} 
'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { SlidingColorTransition } from './sliding-color-transition'

export function PageTransition({ children }: Readonly<{ children: React.ReactNode }>) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 800) // Reverted to 800 milliseconds

    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <AnimatePresence mode="wait">
      <motion.div key={pathname} className="relative z-0">
        <SlidingColorTransition isVisible={isLoading} />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isLoading ? 0 : 1 }}
          transition={{ duration: 0.5 }} // Reverted to 0.5 seconds
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}


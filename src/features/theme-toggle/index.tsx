'use client'

import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = resolvedTheme === 'dark'

  const iconProps = {
    size: 22,
    className:
      'cursor-pointer transition-colors duration-300 drop-shadow-[0_0_6px_rgba(147,197,253,0.8)]',
  }

  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.button
        key={isDark ? 'sun' : 'moon'}
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        initial={{ opacity: 0, rotate: -90, scale: 0.9 }}
        animate={{ opacity: 1, rotate: 0, scale: 1 }}
        exit={{ opacity: 0, rotate: 90, scale: 0.9 }}
        transition={{ duration: 0.1 }}
        aria-label='Сменить тему'
        className='cursor-pointer  rounded-full bg-transparent'
      >
        {isDark ? (
          <Sun {...iconProps} className='text-yellow-400' />
        ) : (
          <Moon {...iconProps} className='text-blue-300' />
        )}
      </motion.button>
    </AnimatePresence>
  )
}

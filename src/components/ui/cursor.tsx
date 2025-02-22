'use client'
import React, { useEffect, useState, useRef } from 'react'
import {
  motion,
  SpringOptions,
  useMotionValue,
  useSpring,
  AnimatePresence,
  Transition,
  Variant,
} from 'motion/react'
import { cn } from '@/lib/utils'

export type CursorProps = {
  children: React.ReactNode
  className?: string
  springConfig?: SpringOptions
  attachToParent?: boolean
  transition?: Transition
  variants?: {
    initial: Variant
    animate: Variant
    exit: Variant
  }
  onPositionChange?: (x: number, y: number, element: HTMLElement) => void
}

export function Cursor({
  children,
  className,
  springConfig,
  attachToParent,
  variants,
  transition,
  onPositionChange,
}: CursorProps) {
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(!attachToParent)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      cursorX.set(window.innerWidth / 2)
      cursorY.set(window.innerHeight / 2)
    }
  }, [])

  useEffect(() => {
    if (!attachToParent) {
      document.body.style.cursor = 'none'
    }

    const parent = cursorRef.current?.parentElement

    const updatePosition = (e: MouseEvent) => {
      if (attachToParent && parent) {
        const rect = parent.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        cursorX.set(x)
        cursorY.set(y)
        onPositionChange?.(e.clientX, e.clientY, parent)
      } else {
        cursorX.set(e.clientX)
        cursorY.set(e.clientY)
      }
    }

    const handleMouseEnter = () => {
      if (parent) {
        parent.style.cursor = 'none'
        setIsVisible(true)
      }
    }

    const handleMouseLeave = () => {
      if (parent) {
        parent.style.cursor = 'auto'
        setIsVisible(false)
      }
    }

    if (attachToParent && parent) {
      parent.addEventListener('mousemove', updatePosition)
      parent.addEventListener('mouseenter', handleMouseEnter)
      parent.addEventListener('mouseleave', handleMouseLeave)
    } else {
      document.addEventListener('mousemove', updatePosition)
    }

    return () => {
      if (attachToParent && parent) {
        parent.removeEventListener('mousemove', updatePosition)
        parent.removeEventListener('mouseenter', handleMouseEnter)
        parent.removeEventListener('mouseleave', handleMouseLeave)
      } else {
        document.removeEventListener('mousemove', updatePosition)
      }
    }
  }, [attachToParent, cursorX, cursorY, onPositionChange])

  const cursorXSpring = useSpring(cursorX, springConfig || { duration: 0 })
  const cursorYSpring = useSpring(cursorY, springConfig || { duration: 0 })

  return (
    <motion.div
      ref={cursorRef}
      className={cn(
        'pointer-events-none z-50',
        attachToParent ? 'absolute' : 'fixed',
        className,
      )}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: '-50%',
        translateY: '-50%',
      }}
    >
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial='initial'
            animate='animate'
            exit='exit'
            variants={variants}
            transition={transition}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

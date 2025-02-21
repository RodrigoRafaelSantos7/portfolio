'use client'
import { motion } from 'motion/react'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/constants/animations'

export default function Personal() {
  return (
    <motion.main
      className='space-y-24'
      variants={VARIANTS_CONTAINER}
      initial='hidden'
      animate='visible'
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className='flex-1'>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Focused on creating intuitive and performant web experiences.
            Bridging the gap between design and development.
          </p>
        </div>
      </motion.section>
    </motion.main>
  )
}

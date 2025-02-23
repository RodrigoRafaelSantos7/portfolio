import { motion } from 'motion/react'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/constants/animations'
import { ABOUT } from '@/app/data'

export function About(): React.ReactNode {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h1 className='font-medium text-[var(--heading)] mb-4'>
        {ABOUT.heading}
      </h1>
      <p className='text-[var(--text)]'>{ABOUT.text}</p>
    </motion.section>
  )
}

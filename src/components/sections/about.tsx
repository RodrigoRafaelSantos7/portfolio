import { motion } from 'motion/react'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/constants/animations'
import { about } from '@/app/data'

/**
 * About section
 *
 * This section contains a brief introduction.
 *
 * @returns {React.ReactNode} The About section component.
 */
export function About(): React.ReactNode {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <h1 className='font-medium text-[var(--heading)] mb-4'>
        {about.heading}
      </h1>
      <p className='text-[var(--text)]'>{about.text}</p>
    </motion.section>
  )
}

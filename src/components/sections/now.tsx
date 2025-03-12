import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/constants/animations'
import { motion } from 'motion/react'

export function Now(): React.ReactNode {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className='flex-1'>
        <h1 className='font-medium text-[var(--heading)] mb-4'>Now</h1>
        <p className=' text-[var(--text)]'>
          I&apos;m studying{' '}
          <a className='underline' href=''>
            Computer Science and Engineering
          </a>
        </p>
        <p className='text-[var(--text)]'>
          <br /> I do freelance to create and improve company websites and web
          apps.
          <br /> I also write a newsletter with news, tips, and curated links
        </p>
      </div>
    </motion.section>
  )
}

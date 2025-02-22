import { newsletter } from '@/app/data'
import { VARIANTS_SECTION } from '@/constants/animations'

import { TRANSITION_SECTION } from '@/constants/animations'
import { motion } from 'motion/react'

/**
 * Newsletter Subscribe section
 *
 * This section contains a form for users to subscribe to the newsletter.
 *
 * @returns {React.ReactNode} The Newsletter Subscribe section component.
 */
export function NewsletterSubscribe(): React.ReactNode {
  return (
    <motion.section
      variants={VARIANTS_SECTION}
      transition={TRANSITION_SECTION}
      className='bg-[var(--newsletter-background)] rounded-lg p-7'
    >
      <p className='text-[var(--text)] mb-3'>{newsletter.text}</p>
      <div className='flex flex-row items-center gap-2 w-full'>
        <input
          type='text'
          className='flex-1 h-10 rounded-lg bg-[var(--newsletter-placeholder-bg)] p-4 placeholder-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--newsletter-focus)] text-[var(--text)]'
          placeholder={newsletter.placeholder}
        />
        <button className='h-10 px-4 text-sm font-medium rounded-lg bg-[var(--newsletter-button-bg)] hover:bg-[var(--newsletter-button-hover)] text-[var(--newsletter-button-text)]'>
          {newsletter.button}
        </button>
      </div>
    </motion.section>
  )
}

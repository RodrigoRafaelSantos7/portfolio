/**
 * @author Rodrigo Santos <hello@rodrigosantos.dev>
 */

'use client'

import { motion } from 'motion/react'
import { VARIANTS_CONTAINER } from '@/constants/animations'
import { About } from '@/components/sections/about'
import { Now } from '@/components/sections/now'
import { NewsletterSubscribe } from '@/components/sections/newsletter-subscribe'
import { Projects } from '@/components/sections/projects'

export default function Personal(): React.ReactNode {
  return (
    <motion.main
      className='space-y-16 mt-16'
      variants={VARIANTS_CONTAINER}
      initial='hidden'
      animate='visible'
    >
      <About />
      <Now />
      <NewsletterSubscribe />
      <Projects />
    </motion.main>
  )
}

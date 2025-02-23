'use client'
import { motion } from 'motion/react'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/constants/animations'

export function Header() {
  return (
    <motion.main
      variants={VARIANTS_CONTAINER}
      initial='hidden'
      animate='visible'
    >
      <motion.header
        className='mb-8 flex items-center justify-start gap-4'
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <Image
          src='/profile.png'
          alt='Rodrigo Santos'
          width={400}
          height={400}
          className='h-16 w-16 rounded-full hover:scale-105 transition-all duration-300'
        />
        <div>
          <Link href='/' className='font-medium text-[var(--heading)]'>
            Rodrigo Santos
          </Link>
          <TextEffect
            as='p'
            preset='fade'
            per='char'
            className='text-[var(--text)] font-[family-name:var(--font-geist-mono)]'
            delay={0.5}
          >
            Software Engineer
          </TextEffect>
        </div>
      </motion.header>
    </motion.main>
  )
}

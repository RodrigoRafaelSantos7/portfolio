'use client'
import { motion } from 'motion/react'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/constants/animations'
import { About } from '@/components/sections/about'

export default function Personal() {
  return (
    <motion.main
      className='space-y-16 mt-16'
      variants={VARIANTS_CONTAINER}
      initial='hidden'
      animate='visible'
    >
      <About />
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className='flex-1'>
          <h1 className='font-medium text-black dark:text-white mb-4'>Now</h1>
          <p className=' text-zinc-600 dark:text-[rgb(180,180,180)]'>
            I&apos;m studying{' '}
            <a className='underline dark:text-zinc-300' href=''>
              Computer Science and Engineering
            </a>
            ; I&apos;m conducting research on asynchronous choreographies and
            their impacts on swarm behaviour under the supervision of{' '}
            <a
              className='underline dark:text-zinc-300'
              href='https://novaresearch.unl.pt/en/persons/jo%C3%A3o-costa-seco'
              target='_blank'
            >
              João Costa Seco
            </a>{' '}
            and{' '}
            <a
              className='underline dark:text-zinc-300'
              href='https://novaresearch.unl.pt/en/persons/eduardo-miguel-pereira-do-cano-rico-geraldo'
              target='_blank'
            >
              Eduardo Geraldo
            </a>
            . This work is integrated into the developments of the{' '}
            <a
              className='underline dark:text-zinc-300'
              href='https://project-tardis.eu'
              target='_blank'
            >
              European Project TaRDIS
            </a>
            .
          </p>
          <p className=' text-zinc-600 dark:text-zinc-400'>
            <br /> I do freelance to create and improve company websites and web
            apps.
            <br /> I also write a newsletter with news, tips, and curated links
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
        className='bg-[#F9F9F9] dark:bg-[#191919] rounded-lg p-7'
      >
        <p className='text-zinc-600 dark:text-[rgb(180,180,180)] mb-3'>
          Subscribe to my personal newsletter for project updates, great links,
          and some personal notes.
        </p>
        <div className='flex flex-row items-center gap-2 w-full'>
          <input
            type='text'
            className='flex-1 h-9 rounded-lg bg-[#F0F0F0] px-4 text-zinc-900  placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20c dark:bg-[#222] dark:text-[rgb(180,180,180)] dark:placeholder-[rgb(180,180,180)]'
            placeholder='you@example.com'
          />
          <button className='h-9 px-4 text-sm  rounded-lg dark:bg-[#F0F0F0] hover:bg-[rgb(180,180,180)] text-white dark:text-black bg-[#222] dark:hover:bg-[rgb(180,180,180)] transition-colors duration-200'>
            Subscribe
          </button>
        </div>
      </motion.section>
    </motion.main>
  )
}

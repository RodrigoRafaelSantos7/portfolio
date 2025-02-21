'use client'
import { motion } from 'motion/react'
import {
  VARIANTS_CONTAINER,
  VARIANTS_SECTION,
  TRANSITION_SECTION,
} from '@/constants/animations'
import { PROJECTS } from './data'
import { DisclosureCard } from '@/components/disclosure-card'

export default function Personal() {
  return (
    <motion.main
      className='space-y-16 mt-16'
      variants={VARIANTS_CONTAINER}
      initial='hidden'
      animate='visible'
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className='flex-1'>
          <h1 className='font-medium text-black dark:text-white mb-4'>
            About me
          </h1>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Crafting Web Apps with React since 2023. Passionate about interface
            design and attention to detail, striving to create great
            experiences.
          </p>
        </div>
      </motion.section>
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className='flex-1'>
          <h1 className='font-medium text-black dark:text-white mb-4'>Now</h1>
          <p className=' text-zinc-600 dark:text-zinc-400'>
            I'm studying{' '}
            <a className='underline dark:text-zinc-300' href=''>
              Computer Science and Engineering
            </a>
            ; I'm conducting research on asynchronous choreographies and their
            impacts on swarm behaviour under the supervision of{' '}
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
        className='bg-zinc-100 dark:bg-[#191919] rounded-lg p-8'
      >
        <p className='text-zinc-600 dark:text-zinc-400'>
          Subscribe to my personal newsletter for project updates, great links,
          and some personal notes.
        </p>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className='mb-5 text-lg font-medium'>Selected Projects</h3>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {PROJECTS.map(project => (
            <DisclosureCard key={project.name} project={project} />
          ))}
        </div>
      </motion.section>
    </motion.main>
  )
}

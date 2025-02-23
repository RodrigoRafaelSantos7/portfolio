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
          ; I&apos;m conducting research on asynchronous choreographies and
          their impacts on swarm behaviour under the supervision of{' '}
          <a
            className='underline'
            href='https://novaresearch.unl.pt/en/persons/jo%C3%A3o-costa-seco'
            target='_blank'
          >
            João Costa Seco
          </a>{' '}
          and{' '}
          <a
            className='underline'
            href='https://novaresearch.unl.pt/en/persons/eduardo-miguel-pereira-do-cano-rico-geraldo'
            target='_blank'
          >
            Eduardo Geraldo
          </a>
          . This work is integrated into the developments of the{' '}
          <a
            className='underline text-[var(--link)]'
            href='https://project-tardis.eu'
            target='_blank'
          >
            European Project TaRDIS
          </a>
          .
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

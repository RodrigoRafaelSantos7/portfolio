import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/constants/animations'
import { motion } from 'motion/react'
import { workExperience } from '@/app/data'

export function WorkExperience(): React.ReactNode {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className='flex-1'>
        <h1 className='font-medium text-[var(--heading)] mb-4'>
          Work Experience
        </h1>
        <div className='flex flex-col space-y-2'>
          {workExperience.map(job => (
            <a
              className='relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30'
              href={job.link}
              target='_blank'
              rel='noopener noreferrer'
              key={job.id}
            >
              <div className='relative h-full w-full rounded-[15px] bg-[var(--background)] p-4'>
                <div className='relative flex w-full flex-row justify-between'>
                  <div>
                    <h4 className='font-normal text-[var(--heading)]'>
                      {job.title}
                    </h4>
                    <p className='text-[var(--text)] '>{job.company}</p>
                  </div>
                  <p className='text-[var(--text)]'>
                    {job.start} - {job.end}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

import { useState } from 'react'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/constants/animations'
import { motion } from 'motion/react'
import { ProgressiveBlur } from '../ui/progressive-blue'
import { projects } from '@/app/data'

/**
 * Projects section
 *
 * This section contains information about the current and past projects.
 *
 * @returns {React.ReactNode} The Projects section component.
 */
export function Projects(): React.ReactNode {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className='flex-1'>
        <h1 className='font-medium text-[var(--heading)] mb-4'>Projects</h1>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {projects.map(project => (
            <div
              key={project.title}
              className='relative my-4 aspect-square overflow-hidden rounded-lg'
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img
                src={project.background}
                alt={project.title}
                className='absolute inset-0'
              />
              <ProgressiveBlur
                className='pointer-events-none absolute bottom-0 left-0 h-[75%] w-full'
                blurIntensity={0.5}
                animate={
                  hoveredProject === project.title ? 'visible' : 'hidden'
                }
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              />
              <motion.div
                className='absolute bottom-0 left-0'
                animate={
                  hoveredProject === project.title ? 'visible' : 'hidden'
                }
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1 },
                }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
              >
                <div className='flex flex-col items-start gap-0 px-5 py-4'>
                  <p className='text-base font-medium text-white'>
                    {project.title}
                  </p>
                  <span className='text-base text-zinc-300'>
                    {project.description}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

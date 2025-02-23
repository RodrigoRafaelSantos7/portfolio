'use client'

import { useState } from 'react'
import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/constants/animations'
import { motion, AnimatePresence } from 'motion/react'
import { ProgressiveBlur } from '../ui/progressive-blue'
import { projects } from '@/app/data'
import { PlusIcon } from 'lucide-react'
import { Cursor } from '../ui/cursor'
import Link from 'next/link'

export function Projects(): React.ReactNode {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const [isHoveringCursor, setIsHoveringCursor] = useState<string | null>(null)

  const handlePositionChange = (
    x: number,
    y: number,
    projectTitle: string,
    element: HTMLElement,
  ) => {
    const rect = element.getBoundingClientRect()
    const isInside =
      x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom
    setIsHoveringCursor(isInside ? projectTitle : null)
  }

  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className='flex-1'>
        <h1 className='font-medium text-[var(--heading)] mb-4'>Projects</h1>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
          {projects.map(project => (
            <Link href={project.link} key={project.title} target='_blank'>
              <div
                className='group relative my-4 aspect-square overflow-hidden rounded-lg cursor-none'
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img
                  src={project.background}
                  alt={project.title}
                  className='absolute inset-0 h-full w-full object-cover cursor-none'
                />

                <Cursor
                  attachToParent
                  variants={{
                    initial: { scale: 0.3, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                    exit: { scale: 0.3, opacity: 0 },
                  }}
                  springConfig={{
                    bounce: 0.001,
                  }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.1,
                  }}
                  onPositionChange={(x, y, element) =>
                    handlePositionChange(x, y, project.title, element)
                  }
                >
                  <motion.div
                    animate={{
                      width: isHoveringCursor === project.title ? 80 : 16,
                      height: isHoveringCursor === project.title ? 32 : 16,
                    }}
                    className='flex items-center justify-center rounded-[24px] bg-[var(--newsletter-placeholder-bg)] backdrop-blur-md'
                  >
                    <AnimatePresence>
                      {isHoveringCursor === project.title ? (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.6 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.6 }}
                          className='inline-flex w-full items-center justify-center'
                        >
                          <div className='inline-flex items-center text-sm text-[var(--text)]'>
                            View <PlusIcon className='ml-1 h-4 w-4' />
                          </div>
                        </motion.div>
                      ) : null}
                    </AnimatePresence>
                  </motion.div>
                </Cursor>
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
                  className='absolute bottom-0 left-0 w-full'
                  animate={
                    hoveredProject === project.title ? 'visible' : 'hidden'
                  }
                  variants={{
                    hidden: { opacity: 0 },
                    visible: { opacity: 1 },
                  }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  <div className='flex flex-col items-start gap-1 px-5 py-4'>
                    <p className='text-base font-semibold text-[#fff]'>
                      {project.title}
                    </p>
                    <span className='text-sm text-[#b4b4b4]'>
                      {project.description}
                    </span>
                  </div>
                </motion.div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </motion.section>
  )
}

'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { PROJECTS, BLOG_POSTS } from './data'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}

export default function Personal() {
  return (
    <motion.main
      className="space-y-16 sm:space-y-32"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="block flex-1">
          <p className="mb-5 font-medium text-[#21201c] sm:mb-6 dark:text-[#eeeeec]">
            Today
          </p>
          <p className="leading-7 font-medium text-[#63635e] dark:text-[#b5b3ad]">
            {
              'I work as a design & software engineer at Quantum Studio. I like to build things for designers, developers and real world clients, and think deeply about the user interface, how it looks, feels, behaves.'
            }
          </p>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 font-medium text-[#21201c] sm:mb-6 dark:text-[#eeeeec]">
          Projects
        </h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {PROJECTS.map((project) => (
              <Link
                key={project.id}
                className="-mx-3 rounded-xl px-3 py-3"
                href={project.link}
                data-id={project.id}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-medium text-[#21201c] dark:text-[#eeeeec]">
                    {project.title}
                  </h4>
                  <p className="font-medium text-[#63635e] dark:text-[#b5b3ad]">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 font-medium text-[#21201c] sm:mb-6 dark:text-[#eeeeec]">
          Writting
        </h3>
        <div className="flex flex-col space-y-0">
          <AnimatedBackground
            enableHover
            className="h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80"
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.uid}
                className="-mx-3 rounded-xl px-3 py-3"
                href={post.link}
                data-id={post.uid}
              >
                <div className="flex flex-col space-y-1">
                  <h4 className="font-medium text-[#21201c] dark:text-[#eeeeec]">
                    {post.title}
                  </h4>
                  <p className="font-medium text-[#63635e] dark:text-[#b5b3ad]">
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </motion.section>

      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <h3 className="mb-5 font-medium text-[#21201c] sm:mb-6 dark:text-[#eeeeec]">
          More
        </h3>
        <p className="font-medium text-[#63635e] dark:text-[#b5b3ad]">
          You can see more of my work on{' '}
          <a
            className="underline-[#bcbbb5] dark:underline-[#62605b] text-[#63635e] underline dark:text-[#b5b3ad]"
            href="https://quantumstudio.pt"
          >
            Quantum Studio
          </a>{' '}
          and more of my code on{' '}
          <a
            className="underline-[#bcbbb5] dark:underline-[#62605b] text-[#63635e] underline dark:text-[#b5b3ad]"
            href="https://github.com/RodrigoRafaelSantos7"
          >
            GitHub
          </a>
          .
          <br />
          For formal inquiries, please contact me at{' '}
          <a
            className="underline-[#bcbbb5] dark:underline-[#62605b] text-[#63635e] underline dark:text-[#b5b3ad]"
            href="mailto:hello@rodrigosantos.dev"
          >
            hello@rodrigosantos.dev
          </a>
        </p>
      </motion.section>
    </motion.main>
  )
}

'use client'
import { motion } from 'motion/react'
import { XIcon } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogClose,
  MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
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

function MagneticSocialLink({
  children,
  link,
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
      <a
        href={link}
        className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
      >
        {children}
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-3 w-3"
        >
          <path
            d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </Magnetic>
  )
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

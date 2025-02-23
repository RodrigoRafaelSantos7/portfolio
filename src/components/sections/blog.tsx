import { VARIANTS_SECTION, TRANSITION_SECTION } from '@/constants/animations'
import { motion } from 'motion/react'
import { AnimatedBackground } from '../ui/animated-background'
import Link from 'next/link'
import { BLOG_POSTS } from '@/app/data'

export function Blog(): React.ReactNode {
  return (
    <motion.section variants={VARIANTS_SECTION} transition={TRANSITION_SECTION}>
      <div className='flex-1'>
        <h1 className='font-medium text-[var(--heading)] mb-4'>Blog</h1>
        <div className='flex flex-col space-y-0'>
          <AnimatedBackground
            enableHover
            className='h-full w-full rounded-lg bg-zinc-100 dark:bg-zinc-900/80'
            transition={{
              type: 'spring',
              bounce: 0,
              duration: 0.2,
            }}
          >
            {BLOG_POSTS.map(post => (
              <Link
                key={post.uid}
                className='-mx-3 rounded-xl px-3 py-3'
                href={post.link}
                data-id={post.uid}
              >
                <div className='flex flex-col space-y-1'>
                  <h4 className='font-normal dark:text-zinc-100'>
                    {post.title}
                  </h4>
                  <p className='text-zinc-500 dark:text-zinc-400'>
                    {post.description}
                  </p>
                </div>
              </Link>
            ))}
          </AnimatedBackground>
        </div>
      </div>
    </motion.section>
  )
}

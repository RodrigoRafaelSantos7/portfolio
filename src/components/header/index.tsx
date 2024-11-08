'use client'

import { Marquee } from '@/components/marquee-scroll'
import { Separator } from '@/components/separator'
import { useMediaQuery } from '@/hooks/use-media-query'
import { pad } from '@/lib/maths'
import cn from 'clsx'
import Link from 'next/link'
import { useMemo } from 'react'
import s from './header.module.scss'

export const Header = ({
  principles = [],
  contact,
}: {
  principles: string[]
  contact: unknown
}) => {
  const isMobile = useMediaQuery('(max-width: 800px)')

  const memoizedPrinciples = useMemo(() => principles, [principles])

  return (
    <header className={cn(s.container, 'layout-block')}>
      <div className={cn(s.top, 'layout-grid')}>
        <div className={s.eggs}>
          <Link
            className={s.egg}
            href="https://github.com/rodrigosantos7"
          ></Link>
          <Link className={s.egg} href="https://soundboard.studiofreight.com">
            {/* Placeholder for removed SVG */}
          </Link>
          <Link className={s.egg} href="https://youtu.be/GO5FwsblpT8">
            {/* Placeholder for removed SVG */}
          </Link>
        </div>
        {!isMobile && (
          <Marquee className={s.marquee}>
            {memoizedPrinciples.map((principle, i) => (
              <p key={i} className={cn('p', s.principle)}>
                <span>{pad(i + 1)}</span>
                &nbsp;{principle}
                <span className={s.separator}>{'//'}</span>
              </p>
            ))}
          </Marquee>
        )}
      </div>
      <Separator />
      <div className={cn(s.header, 'layout-grid')}>
        {/* Placeholder for removed logo */}
      </div>
      <Separator />

      {isMobile && (
        <Marquee className={s.marquee}>
          {memoizedPrinciples.map((principle, i) => (
            <p key={i} className={cn('p', s.principle)}>
              <span>{pad(i + 1)}</span>
              &nbsp;{principle}
              <span className={s.separator}>{'//'}</span>
            </p>
          ))}
        </Marquee>
      )}
    </header>
  )
}

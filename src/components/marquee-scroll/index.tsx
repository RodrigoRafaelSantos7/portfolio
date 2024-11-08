import { useRect } from '@/hooks/use-rect'
import { useWindowSize } from '@/hooks/use-window-size'
import { truncate } from '@/lib/maths'
import { useLenis } from 'lenis/react'
import { useRef } from 'react'
import s from './marquee-scroll.module.scss'

interface MarqueeScrollProps {
  children: React.ReactNode
  className?: string
  repeat?: number
}

export function Marquee({
  children,
  className,
  repeat = 2,
}: MarqueeScrollProps) {
  const el = useRef<HTMLDivElement | null>(null)

  const [setRef, rect] = useRect()
  const { height: windowHeight } = useWindowSize()

  useLenis(
    ({ scroll }) => {
      if (rect.top === undefined) return
      const scrollY = scroll

      const progress = -truncate((scrollY * 0.1) % 100, 3)

      const top = rect.top - scrollY

      const inView = top + (rect.height || 0) > 0 && top < (windowHeight || 0)

      if (inView && el.current) {
        el.current.style.setProperty('--marquee-progress', progress + '%')
      }
    },
    [rect, windowHeight]
  )

  return (
    <div
      ref={(node) => {
        el.current = node
        if (node) setRef(node)
      }}
      className={className}
    >
      <div className={s.marquee}>
        {new Array(repeat).fill(children).map((_, i) => (
          <div key={i} className={s.inner}>
            {children}
          </div>
        ))}
      </div>
    </div>
  )
}

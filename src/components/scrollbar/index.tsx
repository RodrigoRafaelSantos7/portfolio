'use client'

import gsap from 'gsap'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef, useState } from 'react'
import s from './scrollbar.module.scss'

function mapRange(
  in_min: number,
  in_max: number,
  input: number,
  out_min: number,
  out_max: number
): number {
  if (in_max === in_min) {
    throw new Error('in_max and in_min cannot be the same value')
  }
  return ((input - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

export function Scrollbar() {
  const lenisRef = useRef<typeof ReactLenis | null>(null)
  const thumbRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)

  const [innerHeight, setInnerHeight] = useState(0)
  const [thumbHeight, setThumbHeight] = useState(0)

  const lenis = useLenis(
    ({ scroll, limit }) => {
      const progress = scroll / limit

      if (thumbRef.current) {
        thumbRef.current.style.transform = `translate3d(0,${
          progress * (innerHeight - thumbHeight)
        }px,0)`
      }
    },
    [innerHeight, thumbHeight]
  )

  useEffect(() => {
    function update(time: number) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)
    return () => gsap.ticker.remove(update)
  }, [])

  useEffect(() => {
    const updateDimensions = () => {
      if (innerRef.current && thumbRef.current) {
        setInnerHeight(innerRef.current.getBoundingClientRect().height)
        setThumbHeight(thumbRef.current.getBoundingClientRect().height)
      }
    }

    updateDimensions() // Initial measurement
    window.addEventListener('resize', updateDimensions) // Update on resize

    return () => {
      window.removeEventListener('resize', updateDimensions)
    }
  }, [])

  useEffect(() => {
    let start: number | null = null

    function onPointerMove(e: PointerEvent) {
      if (start === null || !thumbRef.current) return
      e.preventDefault()

      const scroll = mapRange(
        start,
        innerHeight - (thumbHeight - start),
        e.clientY,
        0,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        lenis.limit
      )
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      lenis.scrollTo(scroll, { immediate: true })
    }

    function onPointerDown(e: PointerEvent) {
      if (thumbRef.current) {
        start = e.clientY - thumbRef.current.getBoundingClientRect().top
      }
    }

    function onPointerUp() {
      start = null
    }

    thumbRef.current?.addEventListener('pointerdown', onPointerDown, false)
    window.addEventListener('pointermove', onPointerMove, false)
    window.addEventListener('pointerup', onPointerUp, false)

    return () => {
      thumbRef.current?.removeEventListener('pointerdown', onPointerDown, false)
      window.removeEventListener('pointermove', onPointerMove, false)
      window.removeEventListener('pointerup', onPointerUp, false)
    }
  }, [lenis, innerHeight, thumbHeight])

  return (
    <ReactLenis>
      <div className={s.scrollbar}>
        <div ref={innerRef} className={s.inner}>
          <div
            className={s.thumb}
            ref={(node) => {
              thumbRef.current = node
            }}
          />
        </div>
      </div>
    </ReactLenis>
  )
}

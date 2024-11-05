'use client'
import Tempus from '@darkroom.engineering/tempus'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import dynamic from 'next/dynamic'

const Noise = dynamic(
  () => import('@/components/noise').then(({ Noise }) => {
    return Noise
  }),
  { ssr: false }
)

declare global {
  interface Window {
    CREDIT_ME: {
      id: string
      url: string
      credits: {
        name: string
        email: string
        website: string
      }[]
    }
  }
}

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
  ScrollTrigger.defaults({ markers: process.env.NODE_ENV === 'development' })

  // merge rafs
  gsap.ticker.lagSmoothing(0)
  gsap.ticker.remove(gsap.updateRoot)
  Tempus.add((time: number) => {
    gsap.updateRoot(time / 1000)
  }, 0)

  // reset scroll position
  window.scrollTo(0, 0)
  window.history.scrollRestoration = 'manual'

  window.CREDIT_ME = {
    id: location.hostname,
    url: 'localhost:3000',
    credits: [
      {
        name: 'Rodrigo Santos',
        email: 'rrc.santos@camopus.fct.unl.pt',
        website: 'localhost:3000'
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      <Noise />
    </>
  )
}
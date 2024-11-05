'use client'
import RealViewport from '@/components/real-viewport'
import dynamic from 'next/dynamic'

const Noise = dynamic(
  () => import('@/components/noise').then(({ Noise }) => {
    return Noise
  }),
  { ssr: false }
)

export default function Home() {
  return (
    <>
      <RealViewport />
      <Noise />
    </>
  )
}
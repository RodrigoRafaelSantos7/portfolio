'use client'
import { Cursor } from '@/components/cursor'
import RealViewport from '@/components/real-viewport'
import dynamic from 'next/dynamic'

const Noise = dynamic(
  () => import('@/components/noise').then(({ Noise }) => Noise),
  {
    ssr: false,
  }
)

export default function Home() {
  return (
    <div>
      <RealViewport />
      <Noise />
      <Cursor />
    </div>
  )
}

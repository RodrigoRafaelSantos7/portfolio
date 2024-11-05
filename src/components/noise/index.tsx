'use client'
import { useFrame } from '@/hooks/use-frame'
import { useEffect, useRef, useState } from 'react'
import { useWindowSize } from 'react-use'

export function Noise() {
  const el = useRef<HTMLDivElement>(null)
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null)
  const [buffer, setBuffer] = useState<HTMLCanvasElement | null>(null)
  const [context, setContext] = useState<CanvasRenderingContext2D | null>(null)

  const { width: windowWidth, height: windowHeight } = useWindowSize()

  useEffect(() => {
    const newCanvas = document.createElement('canvas')
    const newBuffer = document.createElement('canvas')
    const newContext = newCanvas.getContext('2d')

    setCanvas(newCanvas)
    setBuffer(newBuffer)
    setContext(newContext)
  }, [])

  useEffect(() => {
    if (el.current && canvas) {
      el.current.appendChild(canvas)
    }

    return () => {
      if (canvas) {
        canvas.remove()
      }
    }
  }, [canvas])

  useEffect(() => {
    if (canvas && context) {
      const dpr = Math.min(window.devicePixelRatio, 2)
      const width = windowWidth
      const height = windowHeight

      canvas.width = width
      canvas.height = height

      const image = context.createImageData(width * dpr, height * dpr)
      const buffer32 = new Uint32Array(image.data.buffer)

      for (let i = 0; i < buffer32.length; i++) {
        if (Math.random() < 0.5) buffer32[i] = 0xffffffff
      }

      if (buffer) {
        buffer.width = width
        buffer.height = height
        const bufferContext = buffer.getContext('2d')
        if (bufferContext) {
          bufferContext.putImageData(image, 0, 0)
        }
      }
    }
  }, [buffer, windowWidth, windowHeight, context, canvas])

  useFrame(() => {
    if (context && canvas && buffer) {
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(
        buffer,
        -Math.random() * 200,
        -Math.random() * 200,
        canvas.width + 200,
        canvas.height + 200
      )
    }
  })

  return (
    <div
      ref={el}
      className="h-screen w-screen fixed left-0 top-0 opacity-[0.06] pointer-events-none z-[100000]"
    />
  )
}
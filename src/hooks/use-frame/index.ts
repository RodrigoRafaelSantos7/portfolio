import Tempus from '@darkroom.engineering/tempus'
import { useEffect } from 'react'

type FrameCallback = () => void

export function useFrame(callback: FrameCallback, priority = 0) {
  useEffect(() => {
    if (callback) {
      Tempus.add(callback, priority)

      return () => Tempus.remove(callback)
    }
  }, [callback, priority])
}

import debounce from 'just-debounce-it'
import { useEffect, useState } from 'react'

/**
 * @name useWindowSize
 * @description A React hook that listens to window size.
 * @returns {object} { width, height }
 */

export function useWindowSize(debounceDelay: number = 500): {
  width?: number
  height?: number
} {
  const [width, setWidth] = useState<number | undefined>()
  const [height, setHeight] = useState<number | undefined>()

  useEffect(() => {
    const onWindowResize = debounce(() => {
      setWidth(
        Math.min(window.innerWidth, document.documentElement.clientWidth)
      )
      setHeight(
        Math.min(window.innerHeight, document.documentElement.clientHeight)
      )
    }, debounceDelay)

    window.addEventListener('resize', onWindowResize, false)

    onWindowResize()

    return () => window.removeEventListener('resize', onWindowResize, false)
  }, [debounceDelay])

  return { width, height }
}

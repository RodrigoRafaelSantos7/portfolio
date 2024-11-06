import cn from 'clsx'
import gsap from 'gsap'
import { useCallback, useEffect, useRef, useState } from 'react'

function Cursor() {
  const cursor = useRef<HTMLDivElement | null>(null)
  const [isGrab, setIsGrab] = useState(false)
  const [isPointer, setIsPointer] = useState(false)
  const [hasMoved, setHasMoved] = useState(false)

  const onMouseMove = useCallback(
    ({ clientX, clientY }: MouseEvent) => {
      if (cursor.current) {
        gsap.to(cursor.current, {
          x: clientX,
          y: clientY,
          duration: hasMoved ? 0.6 : 0,
          ease: 'expo.out'
        })
      }
      setHasMoved(true)
    },
    [hasMoved]
  )

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove, false)

    return () => {
      window.removeEventListener('mousemove', onMouseMove, false)
    }
  }, [hasMoved, onMouseMove])

  useEffect(() => {
    document.documentElement.classList.add('has-custom-cursor')

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
    }
  }, [])

  useEffect(() => {
    let elements: HTMLElement[] = []

    const onMouseEnter = () => {
      setIsPointer(true)
    }
    const onMouseLeave = () => {
      setIsPointer(false)
    }

    elements = Array.from(document.querySelectorAll('button,a,input,label,[data-cursor=\'pointer\']')) as HTMLElement[]

    elements.forEach((element) => {
      element.addEventListener('mouseenter', onMouseEnter, false)
      element.addEventListener('mouseleave', onMouseLeave, false)
    })

    return () => {
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', onMouseEnter, false)
        element.removeEventListener('mouseleave', onMouseLeave, false)
      })
    }
  }, [])

  useEffect(() => {
    let elements: HTMLElement[] = []

    const onMouseEnter = () => {
      setIsGrab(true)
    }
    const onMouseLeave = () => {
      setIsGrab(false)
    }

    elements = Array.from(document.querySelectorAll('button,a,input,label,[data-cursor=\'pointer\']')) as HTMLElement[]

    elements.forEach((element) => {
      element.addEventListener('mouseenter', onMouseEnter, false)
      element.addEventListener('mouseleave', onMouseLeave, false)
    })

    return () => {
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', onMouseEnter, false)
        element.removeEventListener('mouseleave', onMouseLeave, false)
      })
    }
  }, [])

  return (
    <div style={{ opacity: hasMoved ? 1 : 0 }} className="cursor-container">
      <div ref={cursor}>
        <div className={cn('cursor', isGrab && 'cursor-grab', isPointer && 'cursor-pointer')} />
      </div>
    </div>
  )
}

export { Cursor }
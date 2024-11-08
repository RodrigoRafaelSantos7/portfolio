/* eslint-disable @typescript-eslint/no-explicit-any */
import debounce from 'just-debounce-it'
import { useCallback, useEffect, useRef, useState } from 'react'
import { emitter } from './emitter'
import {
  addParentSticky,
  offsetLeft,
  offsetTop,
  removeParentSticky,
} from './utils'

interface UseRectOptions {
  ignoreTransform?: boolean
  ignoreSticky?: boolean
  debounce?: number
  lazy?: boolean
  callback?: (rect: any) => void // You can define a more specific type for rect if needed
}

export function useRect({
  ignoreTransform = false,
  ignoreSticky = true,
  debounce: debounceDelay = 500,
  lazy = false,
  callback,
}: UseRectOptions = {}): [
  React.Dispatch<React.SetStateAction<HTMLElement | undefined>>,
  any,
  React.Dispatch<React.SetStateAction<HTMLElement | undefined>>
] {
  const [element, setElement] = useState<HTMLElement | undefined>()
  const rectRef = useRef<any>({})
  const [rect, setRectState] = useState<any>({})

  const setRect = useCallback(
    ({ top, left, width, height, element }: any) => {
      top = top ?? rectRef.current.top
      left = left ?? rectRef.current.left
      width = width ?? rectRef.current.width
      height = height ?? rectRef.current.height
      element = element ?? rectRef.current.element

      if (
        top === rectRef.current.top &&
        left === rectRef.current.left &&
        width === rectRef.current.width &&
        height === rectRef.current.height &&
        element === rectRef.current.element
      )
        return

      rectRef.current.top = top
      rectRef.current.y = top
      rectRef.current.width = width
      rectRef.current.height = height
      rectRef.current.left = left
      rectRef.current.x = left
      rectRef.current.bottom = top + height
      rectRef.current.right = left + width
      rectRef.current.element = element

      callback?.(rectRef.current)

      if (!lazy) {
        setRectState({ ...rectRef.current })
      }
    },
    [lazy, callback]
  )

  useEffect(() => {
    if (!element) return

    const rect = element.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    setRect({ width, height })

    const onResize = debounce(([entry]: ResizeObserverEntry[]) => {
      const width = entry.borderBoxSize[0].inlineSize
      const height = entry.borderBoxSize[0].blockSize

      setRect({ width, height })
    }, debounceDelay)

    const resizeObserver = new ResizeObserver(onResize)
    resizeObserver.observe(element)

    return () => {
      resizeObserver.disconnect()
      onResize.cancel()
    }
  }, [element, debounceDelay, setRect])

  const [wrapperElement, setWrapperElementRef] = useState<
    HTMLElement | undefined
  >()

  const onWrapperResize = useCallback(() => {
    if (!element) return

    let top: number, left: number

    if (ignoreSticky) removeParentSticky(element)
    if (ignoreTransform) {
      top = offsetTop(element)
      left = offsetLeft(element)
    } else {
      const rect = element.getBoundingClientRect()

      top = rect.top + (wrapperElement?.scrollTop ?? window.scrollY)
      left = rect.left + (wrapperElement?.scrollLeft ?? window.scrollX)
    }
    if (ignoreSticky) addParentSticky(element)

    setRect({ top, left, element })
  }, [ignoreTransform, ignoreSticky, element, setRect, wrapperElement])

  // resize if body height changes
  useEffect(() => {
    onWrapperResize()
    const debouncedOnWrapperResize = debounce(onWrapperResize, debounceDelay)

    const resizeObserver = new ResizeObserver(debouncedOnWrapperResize)
    resizeObserver.observe(wrapperElement ?? document.body)

    return () => {
      resizeObserver.disconnect()
      debouncedOnWrapperResize.cancel()
    }
  }, [wrapperElement, debounceDelay, onWrapperResize])

  const onResize = useCallback(() => {
    if (!element) return
    const elementRect = element.getBoundingClientRect()

    const width = elementRect.width
    const height = elementRect.height

    setRect({ width, height })

    onWrapperResize()
  }, [element, onWrapperResize, setRect])

  useEffect(() => {
    rectRef.current.resize = onResize
    if (!lazy) {
      setRectState({ ...rectRef.current })
    }
    const unbind = emitter.on('resize', onResize)

    return unbind
  }, [onResize, lazy])

  const getRect = useCallback(() => rectRef.current, [])

  return [setElement, lazy ? getRect : rect, setWrapperElementRef]
}

useRect.resize = () => {
  emitter.emit('resize')
}

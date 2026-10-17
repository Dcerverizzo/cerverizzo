'use client'

import { useEffect, useRef } from 'react'

// Decorative ring that trails the pointer. The native cursor stays visible
// (precision for text and forms), and the effect is skipped on touch devices
// and for users who prefer reduced motion.
export default function CustomCursor () {
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return

    const ring = ringRef.current
    if (ring === null) return

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let animId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      animId = requestAnimationFrame(animate)
    }

    // Delegated, so links rendered after mount (language switch, filters) also react
    const onMouseOver = (e: MouseEvent) => {
      const interactive = (e.target as Element).closest('a, button, [role="button"], select, input, textarea')
      ring.classList.toggle('hovering', interactive !== null)
    }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    document.addEventListener('mouseover', onMouseOver, { passive: true })
    animId = requestAnimationFrame(animate)
    ring.style.display = 'block'

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', onMouseOver)
      cancelAnimationFrame(animId)
      ring.style.display = 'none'
    }
  }, [])

  return <div ref={ringRef} className="cursor-ring" style={{ display: 'none' }} aria-hidden="true" />
}

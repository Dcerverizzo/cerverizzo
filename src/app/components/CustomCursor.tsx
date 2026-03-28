'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor () {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only enable on non-touch devices
    if ('ontouchstart' in window) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (dot === null || ring === null) return

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let animId: number

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.left = `${mouseX}px`
      dot.style.top = `${mouseY}px`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ring.style.left = `${ringX}px`
      ring.style.top = `${ringY}px`
      animId = requestAnimationFrame(animate)
    }

    const onMouseEnterInteractive = () => { ring.classList.add('hovering') }
    const onMouseLeaveInteractive = () => { ring.classList.remove('hovering') }

    window.addEventListener('mousemove', onMouseMove, { passive: true })
    animId = requestAnimationFrame(animate)

    const interactives = document.querySelectorAll('a, button, [role="button"]')
    interactives.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterInteractive)
      el.addEventListener('mouseleave', onMouseLeaveInteractive)
    })

    dot.style.display = 'block'
    ring.style.display = 'block'
    document.body.style.cursor = 'none'

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      cancelAnimationFrame(animId)
      interactives.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterInteractive)
        el.removeEventListener('mouseleave', onMouseLeaveInteractive)
      })
      document.body.style.cursor = ''
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="cursor-dot" style={{ display: 'none' }} aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" style={{ display: 'none' }} aria-hidden="true" />
    </>
  )
}

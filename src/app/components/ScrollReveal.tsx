'use client'

import { useEffect } from 'react'

export default function ScrollReveal () {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )

    const elements = document.querySelectorAll('.reveal')
    elements.forEach((el, index) => {
      const delay = el.getAttribute('data-delay')
      if (delay === null) {
        ;(el as HTMLElement).style.transitionDelay = `${(index % 4) * 80}ms`
      }
      observer.observe(el)
    })

    return () => { observer.disconnect() }
  }, [])

  return null
}

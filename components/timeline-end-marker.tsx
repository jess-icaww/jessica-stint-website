"use client"

import { useEffect, useRef, useState } from "react"

export function TimelineEndMarker() {
  const ref = useRef<HTMLDivElement>(null)
  const [reached, setReached] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // Fires right as the marker crosses the same viewport line TimelineProgress
    // uses as its scroll anchor, so the ping fires exactly when the fill line
    // visually reaches/"hits" the circle.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setReached(true)
      },
      { rootMargin: "-65% 0px -35% 0px", threshold: 0 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className="relative flex h-6 w-6 items-center justify-center">
      {reached && (
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60 [animation-fill-mode:forwards] [animation-iteration-count:1]"
        />
      )}
      <div className="relative h-6 w-6 rounded-full border-2 border-dashed border-primary bg-primary shadow-sm" />
    </div>
  )
}

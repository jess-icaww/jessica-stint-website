"use client"

import { useEffect, useRef, useState } from "react"

export function TimelineEndMarker() {
  const ref = useRef<HTMLDivElement>(null)
  const [reached, setReached] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // Sits just above "My Response" — uses the same entrance threshold as Reveal
    // so the ping fires as that section scrolls into view, not the earlier
    // scroll-anchor line TimelineProgress uses for the fill itself.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setReached(true)
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
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

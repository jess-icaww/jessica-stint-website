"use client"

import { useEffect, useRef, useState } from "react"

export function StampBadge({ year, featured = false }: { year: string; featured?: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const [reached, setReached] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    // Fires as the badge crosses the same viewport line TimelineProgress uses
    // as its scroll anchor, so the ping lines up with the fill reaching it.
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
    <div ref={ref} className="relative flex h-14 w-14 items-center justify-center md:h-16 md:w-16">
      {reached && (
        <span
          aria-hidden="true"
          className="absolute inset-0 animate-ping rounded-full bg-primary opacity-60 [animation-fill-mode:forwards] [animation-iteration-count:1]"
        />
      )}
      <div
        className={`relative flex h-14 w-14 -rotate-6 items-center justify-center rounded-full border-2 border-dashed text-xs font-semibold uppercase tracking-wider shadow-sm md:h-16 md:w-16 ${
          featured
            ? "border-primary bg-primary text-primary-foreground"
            : "border-accent bg-card text-accent-foreground"
        }`}
      >
        {year}
      </div>
    </div>
  )
}

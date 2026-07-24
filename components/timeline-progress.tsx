"use client"

import { useEffect, useRef, useState } from "react"

export function TimelineProgress() {
  const trackRef = useRef<HTMLDivElement>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1)
      return
    }

    function updateProgress() {
      const el = trackRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const anchor = window.innerHeight * 0.65
      const raw = (anchor - rect.top) / rect.height
      setProgress(Math.min(1, Math.max(0, raw)))
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress, { passive: true })
    window.addEventListener("resize", updateProgress)
    return () => {
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [])

  return (
    <div
      ref={trackRef}
      aria-hidden="true"
      className="absolute left-[27px] top-2 bottom-2 w-px border-l border-dashed border-border md:left-1/2 md:-translate-x-1/2"
    >
      <div
        className="absolute left-0 top-0 w-px bg-primary transition-[height] duration-150 ease-out"
        style={{ height: `${progress * 100}%` }}
      />
    </div>
  )
}

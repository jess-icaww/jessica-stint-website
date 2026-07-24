"use client"

import { useEffect, useRef, useState, type ReactNode } from "react"

type Direction = "up" | "left" | "right" | "scale"

const hiddenClasses: Record<Direction, string> = {
  up: "translate-y-6 opacity-0",
  left: "translate-y-6 opacity-0 md:translate-y-0 md:-translate-x-10",
  right: "translate-y-6 opacity-0 md:translate-y-0 md:translate-x-10",
  scale: "scale-75 opacity-0",
}

const visibleClasses: Record<Direction, string> = {
  up: "translate-y-0 opacity-100",
  left: "translate-y-0 opacity-100 md:translate-x-0",
  right: "translate-y-0 opacity-100 md:translate-x-0",
  scale: "scale-100 opacity-100",
}

export function Reveal({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode
  className?: string
  direction?: Direction
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-out ${
        visible ? visibleClasses[direction] : hiddenClasses[direction]
      } ${className}`}
    >
      {children}
    </div>
  )
}

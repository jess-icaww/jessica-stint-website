"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

const POSTER_URL = "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1920&q=80"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  const scrollToStory = () => {
    const el = document.getElementById("story")
    if (!el) return
    const offset = el.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: offset - 40, behavior: "smooth" })
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Pause decoding once the hero scrolls out of view instead of letting it run forever in the background.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        {/* Static poster on small screens — skips decoding the video on the devices least able to afford it */}
        <img
          src={POSTER_URL}
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center md:hidden"
        />
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="hidden h-full w-full object-cover object-center md:block"
          poster={POSTER_URL}
        >
          <source
            src="https://videos.pexels.com/video-files/2711017/2711017-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
        {/* Stronger, more cinematic gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/60 to-black/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        {/* Eyebrow */}
        <span className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
          Campus Ministry &bull; Tokyo, Japan
        </span>

        {/* Title */}
        <h1 className="mb-6 max-w-4xl font-serif text-6xl font-light leading-tight text-balance drop-shadow-lg md:text-7xl lg:text-8xl">
          Called to Japan
        </h1>

        {/* Subtitle */}
        <p className="mb-10 max-w-xl text-lg font-light leading-relaxed text-white/85 drop-shadow md:text-xl">
          Going where less than 0.5% know the name of Jesus
        </p>

        {/* Buttons — matched width, pill shape */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button
            size="lg"
            asChild
            className="min-w-[180px] rounded-full bg-primary px-8 text-sm font-semibold shadow-lg transition-all duration-200 cursor-pointer hover:bg-primary/90 hover:scale-105 hover:shadow-xl active:scale-95"
          >
            <Link href="/updates">Read Latest Update</Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="min-w-[180px] rounded-full border-white/60 bg-transparent px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 cursor-pointer hover:bg-white/40 hover:border-white hover:text-white hover:scale-105 active:scale-95"
            onClick={scrollToStory}
          >
            Read My Story
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToStory}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce cursor-pointer text-white/60 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-7 w-7" />
      </button>
    </section>
  )
}

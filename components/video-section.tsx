"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="bg-foreground py-24 md:py-32">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            Watch
          </span>
          <h2 className="mb-4 font-serif text-3xl font-light text-primary-foreground md:text-4xl lg:text-5xl">
            Hear My Heart
          </h2>
          <p className="mx-auto max-w-2xl text-primary-foreground/80">
            Take a few minutes to learn more about my calling, the ministry, and how you can be part of this journey.
          </p>
        </div>

        {/* Video Container */}
        <div className="relative aspect-video overflow-hidden rounded-lg bg-black/20">
          {!isPlaying ? (
            <>
              <img
                src="https://images.unsplash.com/photo-1528164344705-47542687000d?w=1200&q=80"
                alt="Video thumbnail - Sarah sharing her story"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="group flex h-20 w-20 items-center justify-center rounded-full bg-white/90 transition-transform hover:scale-110"
                  aria-label="Play video"
                >
                  <Play className="h-8 w-8 text-foreground ml-1" />
                </button>
              </div>
            </>
          ) : (
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="My Calling to Japan"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          )}
        </div>
      </div>
    </section>
  )
}

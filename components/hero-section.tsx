"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToStory = () => {
    const el = document.getElementById("story")
    if (!el) return
    const offset = el.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top: offset - 40, behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background photograph */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-tokyo.png"
          alt="A quiet Tokyo street at dawn"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-foreground/30 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-end px-6 pb-20 pt-32 md:grid md:grid-cols-12 md:items-end md:gap-8 md:pb-28">
        {/* Text */}
        <div className="md:col-span-8">
          <span className="mb-6 inline-block text-xs font-medium uppercase tracking-[0.35em] text-background/70">
            A year in Tokyo, Japan
          </span>
          <h1 className="max-w-3xl font-serif text-5xl font-light leading-[1.05] text-balance text-background drop-shadow-sm md:text-7xl">
            Come walk with me
            <span className="mt-2 block italic text-background/90">as God sends me to Japan</span>
          </h1>
          <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-background/85">
            {
              "I'm Jessica — a 22-year-old following where the Lord is leading. This is my journal of the year ahead: the people, the streets, the small moments, and the story God is writing in Tokyo."
            }
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              href="/updates"
              className="rounded-full bg-background px-8 py-3 text-sm font-medium text-foreground shadow-lg transition-all duration-200 hover:scale-[1.03] hover:bg-background/90"
            >
              Read Latest Update
            </Link>
            <button
              onClick={scrollToStory}
              className="rounded-full border border-background/50 px-8 py-3 text-sm font-medium text-background backdrop-blur-sm transition-all duration-200 hover:scale-[1.03] hover:bg-background/10"
            >
              My Story
            </button>
          </div>
        </div>

        {/* Journal photo inset */}
        <div className="hidden md:col-span-4 md:flex md:justify-end">
          <figure className="w-full max-w-[16rem] rotate-2 rounded-sm bg-background p-3 pb-6 shadow-2xl transition-transform duration-500 hover:rotate-0">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/jessica-portrait.png"
                alt="Jessica in a Tokyo coffee shop"
                fill
                className="object-cover"
              />
            </div>
            <figcaption className="mt-3 text-center font-serif text-sm italic text-muted-foreground">
              somewhere in Tokyo
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToStory}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 animate-bounce text-background/60 transition-colors hover:text-background"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-6 w-6" />
      </button>
    </section>
  )
}

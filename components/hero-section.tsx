"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
    const scrollToAboutMe = () => {
        const el = document.getElementById('about')
        if (!el) return
        const offset = el.getBoundingClientRect().top + window.scrollY
        window.scrollTo({ top: offset + 40, behavior: 'smooth' })
    }

    return (
        <section className="relative h-screen min-h-[600px] w-full overflow-hidden">

            {/* Video Background */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="h-full w-full object-cover object-center"
                    poster="https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1920&q=80"
                >
                    <source
                        src="https://videos.pexels.com/video-files/2711017/2711017-uhd_2560_1440_30fps.mp4"
                        type="video/mp4"
                    />
                </video>
                {/* Stronger, more cinematic gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/75" />
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
                        className="min-w-[180px] rounded-full bg-primary px-8 text-sm font-semibold shadow-lg transition-all duration-200 cursor-pointer hover:bg-primary/90 hover:scale-105 hover:shadow-xl active:scale-95"
                        onClick={() => document.getElementById('donate')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        Partner With Me
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="min-w-[180px] rounded-full border-white/60 bg-transparent px-8 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 cursor-pointer hover:bg-white/40 hover:border-white hover:text-white hover:scale-105 active:scale-95"
                        onClick={scrollToAboutMe}
                    >
                        Read My Story
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <button
                onClick={scrollToAboutMe}
                className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce cursor-pointer text-white/60 transition-colors hover:text-white"
                aria-label="Scroll down"
            >
                <ChevronDown className="h-7 w-7" />
            </button>

        </section>
    )
}
"use client"

import { useState } from "react"
import { GalleryNavigation } from "@/components/gallery-navigation"
import { Footer } from "@/components/footer"
import { Play, X, ChevronLeft, ChevronRight, MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

type GalleryItem = {
  id: number
  type: "photo" | "video"
  src: string
  thumbnail?: string
  title: string
  location: string
  date: string
  aspectRatio: "square" | "portrait" | "landscape" | "wide"
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    type: "photo",
    src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200&q=80",
    title: "First Morning in Tokyo",
    location: "Shibuya, Tokyo",
    date: "January 2026",
    aspectRatio: "landscape",
  },
  {
    id: 2,
    type: "photo",
    src: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    title: "Cherry Blossoms at the Temple",
    location: "Senso-ji, Asakusa",
    date: "April 2026",
    aspectRatio: "portrait",
  },
  {
    id: 3,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&q=80",
    title: "A Day in Campus Ministry",
    location: "Waseda University",
    date: "February 2026",
    aspectRatio: "wide",
  },
  {
    id: 4,
    type: "photo",
    src: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80",
    title: "Student Coffee Conversations",
    location: "Local Cafe, Shinjuku",
    date: "February 2026",
    aspectRatio: "square",
  },
  {
    id: 5,
    type: "photo",
    src: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=800&q=80",
    title: "Evening Prayer Walk",
    location: "Meguro River",
    date: "March 2026",
    aspectRatio: "portrait",
  },
  {
    id: 6,
    type: "photo",
    src: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=1200&q=80",
    title: "Mount Fuji Weekend Retreat",
    location: "Lake Kawaguchiko",
    date: "March 2026",
    aspectRatio: "wide",
  },
  {
    id: 7,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80",
    title: "Student Testimony: Yuki&apos;s Story",
    location: "Tokyo",
    date: "April 2026",
    aspectRatio: "landscape",
  },
  {
    id: 8,
    type: "photo",
    src: "https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=800&q=80",
    title: "Small Group Bible Study",
    location: "Apartment, Nakano",
    date: "April 2026",
    aspectRatio: "square",
  },
  {
    id: 9,
    type: "photo",
    src: "https://images.unsplash.com/photo-1578469550956-0e16b69c6a3d?w=800&q=80",
    title: "Traditional Tea Ceremony",
    location: "Kyoto",
    date: "May 2026",
    aspectRatio: "portrait",
  },
  {
    id: 10,
    type: "photo",
    src: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=1200&q=80",
    title: "Golden Week Outreach",
    location: "Ueno Park",
    date: "May 2026",
    aspectRatio: "landscape",
  },
  {
    id: 11,
    type: "photo",
    src: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=800&q=80",
    title: "Neon Nights Ministry",
    location: "Akihabara",
    date: "June 2026",
    aspectRatio: "portrait",
  },
  {
    id: 12,
    type: "video",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1493780474015-ba834fd0ce2f?w=800&q=80",
    title: "Summer Camp Highlights",
    location: "Nagano Prefecture",
    date: "July 2026",
    aspectRatio: "wide",
  },
]

const featuredVideo = {
  title: "My Heart for Japan",
  description: "A glimpse into why I feel called to share the Gospel with Japanese university students, and the beautiful people I&apos;ve met along the way.",
  src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  thumbnail: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1600&q=80",
}

export default function GalleryPage() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [filter, setFilter] = useState<"all" | "photos" | "videos">("all")

  const filteredItems = galleryItems.filter((item) => {
    if (filter === "all") return true
    if (filter === "photos") return item.type === "photo"
    if (filter === "videos") return item.type === "video"
    return true
  })

  const openLightbox = (item: GalleryItem) => {
    setSelectedItem(item)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedItem(null)
    document.body.style.overflow = "auto"
  }

  const navigateLightbox = (direction: "prev" | "next") => {
    if (!selectedItem) return
    const currentIndex = filteredItems.findIndex((item) => item.id === selectedItem.id)
    const newIndex = direction === "prev" 
      ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
      : (currentIndex + 1) % filteredItems.length
    setSelectedItem(filteredItems[newIndex])
  }

  const getGridClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case "wide":
        return "col-span-2 row-span-1"
      case "portrait":
        return "col-span-1 row-span-2"
      case "landscape":
        return "col-span-2 row-span-1"
      default:
        return "col-span-1 row-span-1"
    }
  }

  const getAspectClass = (aspectRatio: string) => {
    switch (aspectRatio) {
      case "wide":
        return "aspect-[21/9]"
      case "portrait":
        return "aspect-[3/4]"
      case "landscape":
        return "aspect-[16/9]"
      default:
        return "aspect-square"
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <GalleryNavigation />

      {/* Hero Section */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-16">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url(https://images.unsplash.com/photo-1480796927426-f609979314bd?w=1920&q=80)` 
          }}
        >
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 px-4 text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary-foreground/70">
            Moments from the Mission Field
          </p>
          <h1 className="font-serif text-4xl font-medium leading-tight text-primary-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block">Gallery</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base text-primary-foreground/80 sm:text-lg">
            A visual journey through life and ministry in Japan
          </p>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Featured
            </p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
              {featuredVideo.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              {featuredVideo.description}
            </p>
          </div>

          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-lg">
            {!isVideoPlaying ? (
              <div className="group relative cursor-pointer" onClick={() => setIsVideoPlaying(true)}>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={featuredVideo.thumbnail}
                    alt={featuredVideo.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/30 transition-colors group-hover:bg-foreground/40">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-foreground/90 shadow-2xl transition-transform group-hover:scale-110">
                    <Play className="ml-1 h-8 w-8 text-foreground" fill="currentColor" />
                  </div>
                </div>
              </div>
            ) : (
              <div className="aspect-video">
                <iframe
                  src={`${featuredVideo.src}?autoplay=1`}
                  title={featuredVideo.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="border-y border-border bg-secondary/30">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-center gap-8 py-6">
            {[
              { value: "all", label: "All" },
              { value: "photos", label: "Photos" },
              { value: "videos", label: "Videos" },
            ].map((tab) => (
              <button
                key={tab.value}
                onClick={() => setFilter(tab.value as typeof filter)}
                className={`text-sm font-medium transition-colors ${
                  filter === tab.value
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
                {filter === tab.value && (
                  <span className="mt-1 block h-0.5 bg-primary" />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:auto-rows-[280px] md:grid-cols-4 md:gap-6">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className={`group relative cursor-pointer overflow-hidden rounded-lg ${getGridClass(item.aspectRatio)}`}
                onClick={() => openLightbox(item)}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <div className={`h-full w-full ${getAspectClass(item.aspectRatio)}`}>
                  <img
                    src={item.type === "video" ? item.thumbnail : item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Video Play Icon */}
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/80 shadow-lg transition-transform group-hover:scale-110">
                      <Play className="ml-1 h-6 w-6 text-foreground" fill="currentColor" />
                    </div>
                  </div>
                )}

                {/* Info */}
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 md:p-6">
                  <h3 className="font-serif text-lg font-medium text-primary-foreground md:text-xl">
                    {item.title}
                  </h3>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-primary-foreground/70 md:text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="border-t border-border bg-secondary/30 py-20">
        <div className="container mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl font-medium text-foreground sm:text-3xl">
            Want to See More?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Follow along on Instagram for daily glimpses into life and ministry in Japan.
          </p>
          <Button className="mt-8" size="lg" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              Follow on Instagram
            </a>
          </Button>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/95 p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Navigation */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox("prev")
            }}
            className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
            aria-label="Previous item"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              navigateLightbox("next")
            }}
            className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full text-primary-foreground/70 transition-colors hover:bg-primary-foreground/10 hover:text-primary-foreground"
            aria-label="Next item"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Content */}
          <div 
            className="relative max-h-[85vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedItem.type === "photo" ? (
              <img
                src={selectedItem.src}
                alt={selectedItem.title}
                className="max-h-[85vh] w-auto rounded-lg object-contain"
              />
            ) : (
              <div className="aspect-video w-[85vw] max-w-4xl overflow-hidden rounded-lg">
                <iframe
                  src={`${selectedItem.src}?autoplay=1`}
                  title={selectedItem.title}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}

            {/* Caption */}
            <div className="mt-4 text-center">
              <h3 className="font-serif text-xl font-medium text-primary-foreground">
                {selectedItem.title}
              </h3>
              <div className="mt-2 flex items-center justify-center gap-4 text-sm text-primary-foreground/60">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {selectedItem.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {selectedItem.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

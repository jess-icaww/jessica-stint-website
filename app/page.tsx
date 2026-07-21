import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutMe } from "@/components/about-me"
import { FeaturedNewsletter } from "@/components/featured-newsletter"
import { WhyJapan } from "@/components/why-japan"
import { MinistryTokyo } from "@/components/ministry-tokyo"
import { HomeGallery } from "@/components/home-gallery"
import { StayConnected } from "@/components/stay-connected"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutMe />
      <Reveal>
        <FeaturedNewsletter />
      </Reveal>
      <Reveal>
        <WhyJapan />
      </Reveal>
      <MinistryTokyo />
      <Reveal>
        <HomeGallery />
      </Reveal>
      <Reveal>
        <StayConnected />
      </Reveal>
      <Footer />
    </main>
  )
}

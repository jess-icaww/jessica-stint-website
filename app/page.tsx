import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WhyJapan } from "@/components/why-japan"
import { StudentImpact } from "@/components/student-impact"
import { VideoSection } from "@/components/video-section"
import { Footer } from "@/components/footer"
import { AboutMe } from "@/components/about-me"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutMe />
      <VideoSection />
      <section id="why-japan">
        <WhyJapan />
      </section>
      {/* <section id="impact">
        <StudentImpact />
      </section> */}
      <Footer />
    </main>
  )
}

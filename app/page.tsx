import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MissionStatement } from "@/components/mission-statement"
import { WhyJapan } from "@/components/why-japan"
import { StudentImpact } from "@/components/student-impact"
import { VideoSection } from "@/components/video-section"
import { HowToPartner } from "@/components/how-to-partner"
import { LatestUpdates } from "@/components/latest-updates"
import { PrayerRequests } from "@/components/prayer-requests"
import { DonationCTA } from "@/components/donation-cta"
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
      <HowToPartner />
      <section id="updates">
        <LatestUpdates />
      </section>
      <section id="prayer">
        <PrayerRequests />
      </section>
      <DonationCTA />
      <Footer />
    </main>
  )
}

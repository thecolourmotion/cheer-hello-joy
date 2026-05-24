import { HeroSection } from "@/components/sections/hero-section"
import { MarqueeSection } from "@/components/sections/marquee-section"

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <HeroSection />
      <MarqueeSection />
    </main>
  )
}

import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/sections/hero-section";
import { MarqueeSection } from "@/components/sections/marquee-section";
import { WhyWebsiteSection } from "@/components/sections/why-website-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { Footer } from "@/components/sections/footer";
import { LanguageSwitcher } from "@/components/language-switcher";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Colour Motion | Website Flash Deal - 119,000 FCFA" },
      {
        name: "description",
        content:
          "Get your professional business website for only 119,000 FCFA instead of 250,000 FCFA. Modern, responsive and premium web design by The Colour Motion.",
      },
      { property: "og:title", content: "The Colour Motion | Website Flash Deal" },
      {
        property: "og:description",
        content: "Professional websites starting at 119,000 FCFA. Limited time offer.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <LanguageSwitcher />
      <HeroSection />

      <MarqueeSection />
      <WhyWebsiteSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
    </main>
  );
}

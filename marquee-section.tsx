"use client"

import { motion } from "framer-motion"
import { Check, ArrowRight } from "lucide-react"

const features = [
  "Modern, responsive design",
  "Mobile-optimized experience",
  "Contact form integration",
  "Social media links",
  "SEO optimization basics",
  "Fast loading speed",
  "1 year free hosting",
  "Free domain setup assistance",
]

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center">
          {/* Left side - content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
              The Package
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              Everything<br />
              <span className="text-gradient-gold">Included</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 max-w-lg">
              No hidden fees. No surprises. Get a complete professional website 
              with everything your business needs to succeed online.
            </p>

            {/* Features grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">
              {features.map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary/20 flex items-center justify-center">
                    <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary" />
                  </div>
                  <span className="text-foreground text-xs sm:text-sm md:text-base">{feature}</span>
                </motion.div>
              ))}
            </div>

            <a
              href="https://wa.me/+237650279923?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%28e%29%20par%20l'offre%20de%20site%20web%20%C3%A0%20119%2C000%20FCFA."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm sm:text-base hover:underline underline-offset-4"
            >
              Get started now
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </motion.div>

          {/* Right side - Price card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-2xl sm:rounded-3xl border border-primary/30 bg-card">
              {/* Badge */}
              <div className="absolute -top-3 sm:-top-4 left-5 sm:left-8 bg-primary text-primary-foreground px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold">
                BEST VALUE
              </div>

              <div className="mb-6 sm:mb-8 pt-2">
                <p className="text-muted-foreground text-xs sm:text-sm mb-1 sm:mb-2">Complete Website Package</p>
                <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                  <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground line-through">250,000</span>
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
                    119K
                  </span>
                  <span className="text-muted-foreground text-sm sm:text-base">FCFA</span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1 sm:mt-2">One-time payment. No monthly fees.</p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border">
                {features.slice(0, 4).map((feature) => (
                  <div key={feature} className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
                <p className="text-muted-foreground text-xs sm:text-sm">+ 4 more features included</p>
              </div>

              <a
                href="https://wa.me/+237650279923?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%C3%A9%28e%29%20par%20l'offre%20de%20site%20web%20%C3%A0%20119%2C000%20FCFA."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-primary/90 transition-colors"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Claim This Offer
              </a>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-full h-full rounded-2xl sm:rounded-3xl border border-border" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

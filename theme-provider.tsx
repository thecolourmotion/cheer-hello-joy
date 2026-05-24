"use client"

import { motion } from "framer-motion"

export function MarqueeSection() {
  const items = [
    "MODERN DESIGN",
    "FAST DELIVERY",
    "MOBILE RESPONSIVE",
    "SEO OPTIMIZED",
    "24/7 SUPPORT",
    "100% SATISFACTION",
  ]

  return (
    <section className="py-4 sm:py-6 md:py-8 border-y border-border overflow-hidden">
      <div className="animate-marquee flex whitespace-nowrap">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="mx-4 sm:mx-6 md:mx-8 text-[10px] sm:text-xs md:text-sm lg:text-base font-medium text-muted-foreground tracking-widest uppercase flex items-center gap-4 sm:gap-6 md:gap-8"
          >
            {item}
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full" />
          </span>
        ))}
      </div>
    </section>
  )
}

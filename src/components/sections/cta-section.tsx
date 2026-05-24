import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-secondary/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-1.5 sm:gap-2 bg-destructive/10 text-destructive px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            Limited time offer - Don&apos;t miss out!
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
            Ready to take your<br />
            <span className="text-gradient-gold">business online?</span>
          </h2>

          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 lg:mb-10 max-w-xs sm:max-w-lg md:max-w-2xl mx-auto px-2">
            Join hundreds of business owners who transformed their business with a professional website. The best time to start was yesterday. The next best time is now.
          </p>

          <a
            href="https://wa.me/+237650279923?text=Hello%2C%20I'm%20interested%20in%20your%20website%20offer%20at%20119%2C000%20FCFA."
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-foreground text-background px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Message Us on WhatsApp
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <p className="text-muted-foreground text-xs sm:text-sm mt-4 sm:mt-6">
            Free consultation. No commitment required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

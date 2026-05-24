import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function FeaturesSection() {
  const { t } = useLanguage();
  const features = t.features.list;
  const waHref = `https://wa.me/+237671842727?text=${encodeURIComponent(t.hero.whatsapp)}`;

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-medium text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
              {t.features.kicker}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight mb-4 sm:mb-6">
              {t.features.title1}<br />
              <span className="text-gradient-gold">{t.features.title2}</span>
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 lg:mb-10 max-w-lg">
              {t.features.subtitle}
            </p>

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
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold text-sm sm:text-base hover:underline underline-offset-4"
            >
              {t.features.getStarted}
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative p-5 sm:p-6 md:p-8 lg:p-10 xl:p-12 rounded-2xl sm:rounded-3xl border border-primary/30 bg-card">
              <div className="absolute -top-3 sm:-top-4 left-5 sm:left-8 bg-primary text-primary-foreground px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-bold">
                {t.features.bestValue}
              </div>

              <div className="mb-6 sm:mb-8 pt-2">
                <p className="text-muted-foreground text-xs sm:text-sm mb-1 sm:mb-2">{t.features.packageLabel}</p>
                <div className="flex items-baseline gap-1 sm:gap-2 flex-wrap">
                  <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground line-through">250,000</span>
                  <span className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary">
                    119K
                  </span>
                  <span className="text-muted-foreground text-sm sm:text-base">FCFA</span>
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1 sm:mt-2">{t.features.oneTime}</p>
              </div>

              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border">
                {features.slice(0, 4).map((feature) => (
                  <div key={feature} className="flex items-center gap-2 sm:gap-3">
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
                <p className="text-muted-foreground text-xs sm:text-sm">{t.features.moreFeatures}</p>
              </div>

              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-sm sm:text-base lg:text-lg hover:bg-primary/90 transition-colors"
              >
                {t.features.claim}
              </a>
            </div>
            <div className="absolute -z-10 top-4 sm:top-6 md:top-8 right-4 sm:right-6 md:right-8 w-full h-full rounded-2xl sm:rounded-3xl border border-border" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import tcmLogo from "@/assets/tcm-logo.png";
import { useLanguage } from "@/i18n/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();
  const waHref = `https://wa.me/+237671842727?text=${encodeURIComponent(t.hero.whatsapp)}`;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <nav className="absolute top-0 left-0 right-0 z-50 px-4 py-4 sm:px-6 sm:py-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-center sm:justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <img
              src={tcmLogo}
              alt="The Colour Motion"
              className="h-14 sm:h-16 md:h-20 w-auto brightness-0 invert"
            />
          </motion.div>

          <motion.a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="hidden sm:flex items-center gap-2 bg-foreground text-background px-4 py-2 sm:px-6 sm:py-3 rounded-full font-medium text-xs sm:text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
          >
            {t.nav.contact}
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.a>
        </div>
      </nav>

      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-secondary px-3 sm:px-5 py-2 sm:py-2.5 rounded-full border border-border">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground">
              {t.hero.badge} <span className="text-primary font-semibold">{t.hero.badgeAccent}</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mb-6 sm:mb-8"
        >
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold tracking-tight leading-[1.1] sm:leading-[0.95]">
            <span className="block">{t.hero.title1}</span>
            <span className="block text-gradient-gold">{t.hero.title2}</span>
            <span className="block">{t.hero.title3}</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-xs sm:max-w-lg md:max-w-2xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-2 sm:gap-4 mb-8 sm:mb-10 md:mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center gap-1 sm:gap-4">
            <span className="text-lg sm:text-2xl md:text-3xl text-muted-foreground line-through">250,000 FCFA</span>
            <div className="flex items-baseline gap-1 sm:gap-2">
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-primary">
                119,000
              </span>
              <span className="text-base sm:text-xl md:text-2xl text-muted-foreground">FCFA</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex justify-center px-2"
        >
          <motion.a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 sm:gap-3 bg-primary text-primary-foreground px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-base sm:text-lg glow-gold"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            {t.hero.cta}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

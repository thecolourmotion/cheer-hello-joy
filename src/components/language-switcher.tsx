import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const options: { code: Language; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
];

export function LanguageSwitcher({ inline = false }: { inline?: boolean }) {
  const { language, setLanguage } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={inline ? "" : "fixed top-3 right-3 sm:hidden z-[60]"}
    >
      <div className="relative flex items-center gap-1 p-1 rounded-full border border-border bg-background/60 backdrop-blur-md shadow-lg">
        {options.map((opt) => {
          const active = language === opt.code;
          return (
            <button
              key={opt.code}
              type="button"
              onClick={() => setLanguage(opt.code)}
              aria-pressed={active}
              aria-label={`Switch to ${opt.label}`}
              className="relative px-3 py-1.5 text-xs sm:text-sm font-semibold tracking-wide rounded-full transition-colors duration-300"
            >
              {active && (
                <motion.span
                  layoutId="lang-pill"
                  className="absolute inset-0 rounded-full bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className={`relative z-10 ${active ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`}>
                {opt.label}
              </span>
            </button>
          );
        })}
      </div>
    </motion.div>
  );
}

import { useLanguage } from "@/i18n/LanguageContext";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-border" style={{ backgroundColor: "#f7be3b", color: "#001f3f" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="font-display text-lg md:text-xl font-bold">{t.footer.brand}</div>
          <p className="text-sm text-center md:text-right" style={{ color: "#001f3f" }}>
            {t.footer.tagline}<br />
            <span style={{ color: "#001f3f", opacity: 0.7 }}>{t.footer.rights}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

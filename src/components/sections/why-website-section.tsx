import { motion } from "framer-motion";
import { Globe, TrendingUp, Users, Shield } from "lucide-react";

const reasons = [
  { icon: Globe, title: "24/7 Visibility", description: "Your business never sleeps. Reach customers anytime, anywhere in the world." },
  { icon: TrendingUp, title: "Boost Credibility", description: "93% of consumers research online before buying. Be where they look." },
  { icon: Users, title: "Reach More People", description: "Expand beyond local limits. Your website is your global storefront." },
  { icon: Shield, title: "Build Trust", description: "A professional website signals that you take your business seriously." },
];

export function WhyWebsiteSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <p className="text-primary font-medium text-xs sm:text-sm tracking-widest uppercase mb-3 sm:mb-4">
            Why A Website?
          </p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight">
            Still thinking?<br />
            <span className="text-muted-foreground">Here&apos;s why you need one.</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative p-5 sm:p-6 md:p-8 lg:p-10 rounded-xl sm:rounded-2xl border border-border bg-card hover:border-primary/50 transition-colors duration-500"
            >
              <div className="flex items-start gap-4 sm:gap-5 md:gap-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <reason.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-display text-lg sm:text-xl md:text-2xl font-semibold mb-1 sm:mb-2">
                    {reason.title}
                  </h3>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

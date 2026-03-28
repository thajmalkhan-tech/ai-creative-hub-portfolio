import { Video, Bot } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Video,
    title: "Video Editing Services",
    items: [
      "Social media video editing",
      "Meme content creation",
      "Reels/Shorts editing",
      "Creative promotional edits",
    ],
  },
  {
    icon: Bot,
    title: "AI Automation Projects",
    items: [
      "Python-based automation tools",
      "Voice assistant development",
      "Basic AI workflow systems",
    ],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.2 } },
};

const cardVariant = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Services = () => {
  return (
    <section id="services" className="section-padding section-alt">
      <motion.div
        className="max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2
          className="text-3xl font-bold text-foreground mb-10 text-center"
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
        >
          Services
        </motion.h2>
        <motion.div className="grid md:grid-cols-2 gap-8" variants={container}>
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={cardVariant}
              whileHover={{ y: -6, boxShadow: "0 20px 40px -12px hsl(var(--accent) / 0.15)" }}
              className="bg-card rounded-xl border border-border p-8 shadow-sm cursor-default"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 12, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="inline-block"
              >
                <s.icon className="w-10 h-10 text-accent mb-4" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item, i) => (
                  <motion.li
                    key={item}
                    className="text-muted-foreground text-sm flex items-start gap-2"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;

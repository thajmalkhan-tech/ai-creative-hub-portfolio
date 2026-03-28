import { motion } from "framer-motion";

const categories = [
  {
    title: "Software & Tools",
    skills: ["Photoshop", "CapCut", "DaVinci Resolve", "Canva", "AI Tools"],
  },
  {
    title: "Creative Skills",
    skills: ["Video Editing", "Photo Editing", "Meme Creation", "Graphic Design"],
  },
  {
    title: "Technical Skills",
    skills: ["Python", "Voice Recognition Systems", "AI Automation Concepts"],
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
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
          Skills
        </motion.h2>
        <motion.div className="grid md:grid-cols-3 gap-8" variants={container}>
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              variants={cardVariant}
              whileHover={{ y: -8, boxShadow: "0 20px 40px -12px hsl(var(--accent) / 0.15)" }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-card rounded-xl border border-border p-6 shadow-sm cursor-default"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, si) => (
                  <motion.span
                    key={s}
                    className="bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + si * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;

import { Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="section-padding section-alt">
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
          Experience
        </motion.h2>

        <motion.div
          className="max-w-2xl mx-auto relative pl-8 border-l-2 border-accent"
          variants={{
            hidden: { opacity: 0, x: -30 },
            show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
          }}
        >
          <motion.div
            className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 500 }}
          >
            <Briefcase className="w-3 h-3 text-accent-foreground" />
          </motion.div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Video Editor (Intern)</h3>
            <p className="text-accent font-medium text-sm mb-1">Plant Green Inertia</p>
            <p className="text-muted-foreground text-sm mb-3">Duration: 1 Month</p>
            <ul className="space-y-2">
              {[
                "Created meme-based marketing content",
                "Assisted in digital marketing strategies",
                "Improved social engagement through creative content",
              ].map((item, i) => (
                <motion.li
                  key={item}
                  className="text-muted-foreground text-sm flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;

import { Bot, Video, Megaphone, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  { icon: Bot, label: "AI Development" },
  { icon: Video, label: "Video Editing" },
  { icon: Megaphone, label: "Digital Marketing" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const About = () => {
  return (
    <section id="about" className="section-padding section-alt">
      <motion.div
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Bio */}
        <div>
          <motion.h2 variants={fadeUp} className="text-3xl font-bold text-foreground mb-6">About Me</motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-6">
            I am a second-year B.Sc Artificial Intelligence student at The New
            College (2027 – Expected). I have built a Python-based voice
            recognition AI assistant capable of controlling laptop functions
            through voice commands. I combine technical knowledge in AI and
            automation with creative expertise in video editing and digital
            content creation. I also have experience in digital marketing and
            meme-based brand engagement.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <motion.div
                key={label}
                className="flex items-center gap-2 bg-background rounded-lg px-4 py-2 border border-border shadow-sm"
                whileHover={{ scale: 1.05, y: -2 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <motion.div variants={fadeUp}>
          <h3 className="text-xl font-semibold text-foreground mb-6">Education</h3>
          <div className="relative pl-6 border-l-2 border-accent">
            <motion.div
              className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, type: "spring", stiffness: 500 }}
            />
            <div className="mb-1">
              <GraduationCap className="w-5 h-5 text-accent inline-block mr-2" />
              <span className="font-semibold text-foreground">
                B.Sc Artificial Intelligence
              </span>
            </div>
            <p className="text-muted-foreground text-sm">The New College</p>
            <p className="text-muted-foreground text-sm">2024 – 2027 (Expected)</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;

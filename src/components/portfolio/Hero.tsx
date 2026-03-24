import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import profileImage from "@/assets/profile.jpg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center section-padding pt-28 overflow-hidden"
    >
      {/* Subtle background lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-primary"
            style={{ width: "1px", height: "100%", left: `${12 + i * 12}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={fadeUp} className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Welcome
          </motion.p>
          <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
            THAJMAL KHAN
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-accent font-medium mb-4">
            AI Student · Video Editor · Creative Technologist
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Second-year B.Sc Artificial Intelligence student at The New College
            (Expected 2027), passionate about AI development, automation, and
            creative digital content production.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-4 flex-wrap">
            <Button asChild size="lg" className="hover:scale-105 transition-transform">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:scale-105 transition-transform">
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>
        </motion.div>

        {/* Profile Photo */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <motion.img
            src={profileImage}
            alt="Thajmal Khan - AI Student & Creative Technologist"
            className="w-72 h-72 md:w-80 md:h-80 rounded-2xl object-cover border border-border shadow-lg"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

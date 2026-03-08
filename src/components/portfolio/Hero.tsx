import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { User } from "lucide-react";

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
            style={{
              width: "1px",
              height: "100%",
              left: `${12 + i * 12}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-3">
            Welcome
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-4">
            THAJMAL KHAN
          </h1>
          <p className="text-lg text-accent font-medium mb-4">
            AI Student · Video Editor · Creative Technologist
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Second-year B.Sc Artificial Intelligence student at The New College
            (Expected 2027), passionate about AI development, automation, and
            creative digital content production.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </motion.div>

        {/* Photo placeholder */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-secondary flex items-center justify-center border border-border shadow-lg">
            <User className="w-24 h-24 text-muted-foreground" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

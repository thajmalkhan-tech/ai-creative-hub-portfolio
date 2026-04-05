import { Button } from "@/components/ui/button";
import { Mic, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

import advocateCard from "@/assets/projects/advocate-card.png";
import ibeuBanner from "@/assets/projects/ibeu-banner.png";
import rhamzanCard from "@/assets/projects/rhamzan-card.png";
import marinaPalace from "@/assets/projects/marina-palace.png";

const galleryImages = [
  { src: advocateCard, alt: "Advocate Business Card Design" },
  { src: ibeuBanner, alt: "Indian Bank Employees Union Banner" },
  { src: rhamzanCard, alt: "Rhamzan Matching Centre Card" },
  { src: marinaPalace, alt: "Marina Palace Hotel Flyer Design" },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => setCurrentIndex((i) => (i === 0 ? galleryImages.length - 1 : i - 1));
  const next = () => setCurrentIndex((i) => (i === galleryImages.length - 1 ? 0 : i + 1));

  return (
    <section id="projects" className="section-padding">
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
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Voice Assistant Card */}
          <motion.div
            className="bg-card rounded-xl border border-border p-8 shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
            }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -12px hsl(var(--accent) / 0.15)" }}
          >
            <div className="flex items-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mic className="w-6 h-6 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-xl font-semibold text-foreground">Voice Assistant</h3>
                <p className="text-sm text-muted-foreground">Python-based AI Project</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Built a Python-based AI assistant that controls laptop functions through
              voice commands, demonstrating knowledge of automation, system control,
              and speech recognition.
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-2">Tools & Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["Python", "Speech Recognition", "System Automation", "NLP"].map((t, i) => (
                  <motion.span
                    key={t}
                    className="bg-secondary text-foreground text-xs font-medium px-3 py-1 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.08 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>

            <Button asChild variant="outline" size="sm" className="hover:scale-105 transition-transform">
              <a
                href="https://github.com/thajmalkhan-tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                View on GitHub
              </a>
            </Button>
          </motion.div>

          {/* Design Work Gallery */}
          <motion.div
            className="bg-card rounded-xl border border-border p-8 shadow-sm"
            variants={{
              hidden: { opacity: 0, y: 40, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: 0.15 } },
            }}
            whileHover={{ y: -4, boxShadow: "0 20px 40px -12px hsl(var(--accent) / 0.15)" }}
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">Photoshop Works</h3>
            <p className="text-sm text-muted-foreground mb-4">Graphic Design & Photoshop Projects</p>

            <div className="relative rounded-lg overflow-hidden mb-4 bg-muted aspect-video flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentIndex}
                  src={galleryImages[currentIndex].src}
                  alt={galleryImages[currentIndex].alt}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.3 }}
                />
              </AnimatePresence>

              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 text-foreground hover:bg-background transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm rounded-full p-1.5 text-foreground hover:bg-background transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-sm text-muted-foreground text-center mb-3">
              {galleryImages[currentIndex].alt}
            </p>

            <div className="flex justify-center gap-1.5">
              {galleryImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    i === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;

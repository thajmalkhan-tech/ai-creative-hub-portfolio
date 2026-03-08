import { Button } from "@/components/ui/button";
import { Mic, Github } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Projects = () => {
  const { ref, inView } = useInView();

  return (
    <section id="projects" className="section-padding" ref={ref}>
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Projects</h2>

        <div className="max-w-2xl mx-auto bg-card rounded-xl border border-border p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Mic className="w-6 h-6 text-primary" />
            </div>
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
              {["Python", "Speech Recognition", "System Automation", "NLP"].map(
                (t) => (
                  <span
                    key={t}
                    className="bg-secondary text-foreground text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {t}
                  </span>
                )
              )}
            </div>
          </div>

          <Button asChild variant="outline" size="sm">
            <a
              href="https://github.com/thajmalkhan-tech"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

import { Briefcase } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const Experience = () => {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="section-padding section-alt" ref={ref}>
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Experience</h2>

        <div className="max-w-2xl mx-auto relative pl-8 border-l-2 border-accent">
          <div className="absolute -left-[11px] top-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center">
            <Briefcase className="w-3 h-3 text-accent-foreground" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Video Editor (Intern)</h3>
            <p className="text-accent font-medium text-sm mb-1">Plant Green Inertia</p>
            <p className="text-muted-foreground text-sm mb-3">Duration: 1 Month</p>
            <ul className="space-y-2">
              {[
                "Created meme-based marketing content",
                "Assisted in digital marketing strategies",
                "Improved social engagement through creative content",
              ].map((item) => (
                <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

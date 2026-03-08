import { useInView } from "@/hooks/useInView";

const categories = [
  {
    title: "Software & Tools",
    skills: ["Photoshop", "CapCut", "DaVinci Resolve", "Canva", "AI Tools"],
  },
  {
    title: "Creative Skills",
    skills: ["Video Editing", "Meme Creation", "Graphic Design"],
  },
  {
    title: "Technical Skills",
    skills: ["Python", "Voice Recognition Systems", "AI Automation Concepts"],
  },
];

const Skills = () => {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="section-padding" ref={ref}>
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-card rounded-xl border border-border p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="bg-secondary text-foreground text-xs font-medium px-3 py-1.5 rounded-full"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

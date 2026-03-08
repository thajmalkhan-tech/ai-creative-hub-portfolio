import { Video, Bot } from "lucide-react";
import { useInView } from "@/hooks/useInView";

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

const Services = () => {
  const { ref, inView } = useInView();

  return (
    <section id="services" className="section-padding section-alt" ref={ref}>
      <div
        className={`max-w-7xl mx-auto transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-card rounded-xl border border-border p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <s.icon className="w-10 h-10 text-accent mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

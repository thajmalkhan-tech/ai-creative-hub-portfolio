import { Bot, Video, Megaphone, GraduationCap } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const highlights = [
  { icon: Bot, label: "AI Development" },
  { icon: Video, label: "Video Editing" },
  { icon: Megaphone, label: "Digital Marketing" },
];

const About = () => {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="section-padding section-alt" ref={ref}>
      <div
        className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-start transition-all duration-700 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Bio */}
        <div>
          <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            I am a second-year B.Sc Artificial Intelligence student at The New
            College (2027 – Expected). I have built a Python-based voice
            recognition AI assistant capable of controlling laptop functions
            through voice commands. I combine technical knowledge in AI and
            automation with creative expertise in video editing and digital
            content creation. I also have experience in digital marketing and
            meme-based brand engagement.
          </p>
          <div className="flex flex-wrap gap-4">
            {highlights.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 bg-background rounded-lg px-4 py-2 border border-border shadow-sm"
              >
                <Icon className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-xl font-semibold text-foreground mb-6">Education</h3>
          <div className="relative pl-6 border-l-2 border-accent">
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent" />
            <div className="mb-1">
              <GraduationCap className="w-5 h-5 text-accent inline-block mr-2" />
              <span className="font-semibold text-foreground">
                B.Sc Artificial Intelligence
              </span>
            </div>
            <p className="text-muted-foreground text-sm">The New College</p>
            <p className="text-muted-foreground text-sm">2024 – 2027 (Expected)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

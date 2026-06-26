import { useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Lightbulb,
  Code,
  Brain,
  Mic,
  Image,
  BarChart3,
  MessageSquare,
  Terminal,
  ArrowLeft,
  BookOpen,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const projectIdeas = [
  {
    category: "Beginner-Friendly AI Projects",
    icon: Lightbulb,
    projects: [
      {
        title: "Personal Voice Assistant",
        description:
          "Build a Python-based voice recognition assistant that controls laptop functions through voice commands. This is a perfect starter project that teaches speech-to-text APIs, natural language understanding, and system integration.",
        skills: ["Python", "SpeechRecognition", "pyttsx3", "OS automation"],
        portfolioValue:
          "Demonstrates practical automation skills and real-world utility — something every interviewer understands.",
      },
      {
        title: "Spam Email Classifier",
        description:
          "A classic machine learning project using Naive Bayes or logistic regression to classify emails as spam or not. Train on a public dataset and build a simple web interface to test it live.",
        skills: ["Scikit-learn", "NLP basics", "Pandas", "Flask/Streamlit"],
        portfolioValue:
          "Shows foundational ML knowledge and the ability to deploy a model for real users.",
      },
      {
        title: "Sentiment Analysis Dashboard",
        description:
          "Create a tool that analyzes sentiment in tweets, product reviews, or news headlines. Visualize results with charts showing positive, negative, and neutral trends over time.",
        skills: ["NLTK / TextBlob", "Matplotlib / Plotly", "API integration"],
        portfolioValue:
          "Combines data visualization with NLP — highly visible and easy to demo during interviews.",
      },
    ],
  },
  {
    category: "Intermediate Machine Learning Projects",
    icon: Brain,
    projects: [
      {
        title: "Image Classification App",
        description:
          "Train a CNN to classify images (e.g., animals, vehicles, or custom categories). Wrap it in a web app where users can upload photos and get instant predictions with confidence scores.",
        skills: ["TensorFlow / PyTorch", "CNNs", "Flask / FastAPI", "HTML/CSS"],
        portfolioValue:
          "Proves you can handle the full ML pipeline: data prep, training, evaluation, and deployment.",
      },
      {
        title: "Movie Recommendation Engine",
        description:
          "Build a recommendation system using collaborative filtering or content-based filtering. Use a dataset like MovieLens and create a simple UI where users rate movies to get personalized suggestions.",
        skills: ["Pandas", "Scikit-learn", "Matrix factorization", "Streamlit"],
        portfolioValue:
          "Recommender systems are everywhere (Netflix, Amazon). This project signals industry-relevant skills.",
      },
      {
        title: "Stock Price Predictor",
        description:
          "Use historical stock data to build a time-series forecasting model with LSTM or ARIMA. Include backtesting and a dashboard showing predicted vs. actual prices.",
        skills: ["Pandas", "Keras / Statsmodels", "Time-series analysis", "Plotly"],
        portfolioValue:
          "Financial ML is a high-value niche. Even a basic predictor shows data analysis and modeling depth.",
      },
    ],
  },
  {
    category: "Advanced Portfolio Projects",
    icon: Terminal,
    projects: [
      {
        title: "Real-Time Object Detection System",
        description:
          "Leverage YOLO or SSD to detect objects in a live webcam feed. Add features like counting objects, drawing bounding boxes, and triggering alerts when specific items appear.",
        skills: ["OpenCV", "YOLO / SSD", "PyTorch", "Real-time processing"],
        portfolioValue:
          "A live demo that wows recruiters. Shows you can work with video streams and production-ready models.",
      },
      {
        title: "AI-Powered Chatbot with Memory",
        description:
          "Go beyond basic bots — build a conversational agent that remembers context across sessions, retrieves information from documents (RAG), and integrates with messaging platforms.",
        skills: ["LangChain / LlamaIndex", "Vector DBs (Pinecone/Chroma)", "OpenAI/LLaMA APIs", "FastAPI"],
        portfolioValue:
          "RAG and LLM engineering are among the hottest skills in 2025–2026. This project puts you ahead.",
      },
      {
        title: "Autonomous AI Agent",
        description:
          "Create an agent that can browse websites, extract data, make decisions, and complete multi-step tasks autonomously using tools like Selenium, APIs, and LLM reasoning.",
        skills: ["Agent frameworks", "Function calling", "API orchestration", "Prompt engineering"],
        portfolioValue:
          "The cutting edge of AI. This signals you can design complex systems, not just train models.",
      },
    ],
  },
];

const resumeTips = [
  "Host every project on GitHub with a detailed README, demo GIFs, and setup instructions.",
  "Deploy at least one project live (Render, Hugging Face Spaces, or Streamlit Cloud) so recruiters can try it instantly.",
  "Write a short blog post or LinkedIn article explaining what you built, the challenges, and what you learned.",
  "Quantify impact where possible: 'Reduced manual effort by 80%' or 'Achieved 94% classification accuracy.'",
  "Tailor your project descriptions to the job — emphasize NLP for AI roles, computer vision for robotics roles, etc.",
];

export default function Guide() {
  useEffect(() => {
    document.title =
      "Practical AI Project Ideas for Students to Build a Strong Portfolio | Thajmal Khan";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Simple top bar for navigation back */}
      <div className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 h-14 flex items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Hero header */}
        <motion.header
          initial="hidden"
          animate="show"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.div variants={fadeUp} className="flex items-center gap-2 mb-4">
            <BookOpen className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium text-accent tracking-wide uppercase">
              Student Guide
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight mb-6"
          >
            Practical AI Project Ideas for Students to Build a Strong Portfolio
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl"
          >
            Looking for <strong className="text-foreground">AI project ideas</strong> and{" "}
            <strong className="text-foreground">machine learning projects</strong> that actually
            impress recruiters? This guide covers resume-ready projects — from voice assistants
            to autonomous agents — that demonstrate real-world skills and help you stand out in
            internship and placement interviews.
          </motion.p>
        </motion.header>

        {/* Introduction */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground mb-4">
            Why Your Projects Matter More Than Your GPA
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed mb-4">
            In AI and tech hiring, your portfolio is your proof of work. Recruiters see dozens of
            resumes with similar coursework — what sets you apart is a GitHub profile full of
            projects you built, deployed, and documented.
          </motion.p>
          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed">
            The best <strong>machine learning projects</strong> for students solve real problems,
            use industry-standard tools, and are easy to demonstrate in under 5 minutes. Below,
            I have organized project ideas by difficulty, with specific tech stacks and portfolio
            tips drawn from my own experience building a Python voice assistant and AI automation
            tools.
          </motion.p>
        </motion.section>

        {/* Project categories */}
        {projectIdeas.map((section, sectionIndex) => (
          <motion.section
            key={section.category}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={staggerContainer}
            className="mb-20"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-8">
              <div className="p-2.5 rounded-lg bg-accent/10">
                <section.icon className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">{section.category}</h2>
            </motion.div>

            <div className="space-y-8">
              {section.projects.map((project) => (
                <motion.div
                  key={project.title}
                  variants={fadeUp}
                  className="bg-card border border-border rounded-xl p-6 md:p-8 shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-foreground mb-3">{project.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                      Tech Stack
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-accent mt-1 shrink-0" />
                    <div>
                      <span className="text-xs font-semibold text-foreground uppercase tracking-wider">
                        Why It Impresses
                      </span>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.portfolioValue}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        ))}

        {/* Voice assistant highlight */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div
            variants={fadeUp}
            className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <Mic className="w-6 h-6 text-primary" />
              <h2 className="text-xl font-bold text-foreground">
                From My Experience: Building a Voice Assistant
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              One of the most impactful projects I built as a student was a Python-based voice
              recognition AI assistant. It could open applications, search the web, control system
              settings, and respond to natural language commands — all running locally without cloud
              APIs.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This project taught me more than any classroom assignment: audio preprocessing,
              intent classification, error handling in real-world conditions, and packaging code
              that non-technical users could actually run. If you are looking for a single project
              that covers Python, AI, and automation, a voice assistant is unbeatable.
            </p>
          </motion.div>
        </motion.section>

        {/* Resume tips */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground mb-6">
            How to Present These Projects on Your Resume
          </motion.h2>
          <motion.div variants={fadeUp} className="space-y-4">
            {resumeTips.map((tip, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-accent">{i + 1}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{tip}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>

        {/* Final CTA */}
        <motion.section
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center pb-8"
        >
          <motion.h2 variants={fadeUp} className="text-2xl font-bold text-foreground mb-4">
            Start Building Today
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto mb-8">
            The best time to start your first AI project was yesterday. The second best time is now.
            Pick one idea from this guide, build it in a weekend, and you will already be ahead of
            most applicants.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to My Portfolio
            </Link>
          </motion.div>
        </motion.section>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-8 px-6 text-center">
        <p className="text-muted-foreground text-sm">
          © 2026 Thajmal Khan. Built for students who want to turn AI project ideas into career
          opportunities.
        </p>
      </footer>
    </div>
  );
}

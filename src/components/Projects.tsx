import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "TCS Stock Analysis",
    desc: "Exploratory and time-series analysis on TCS stock data. Applied moving averages and volatility tracking to identify trading trends.",
    tags: ["Python", "Pandas", "Time Series"],
    category: "Data",
    github: "https://github.com/Sunil0012",
    year: "2025",
  },
  {
    title: "Uber Trip Analysis",
    desc: "Analyzed Uber trip data to identify peak demand regions and optimize driver allocation with interactive dashboards.",
    tags: ["Python", "Tableau", "Plotly"],
    category: "Data",
    github: "https://github.com/Sunil0012",
    year: "2025",
  },
  {
    title: "Mental Illness Detection",
    desc: "Deep learning framework for early mental illness detection using social media text data with transformer architectures.",
    tags: ["NLP", "BERT", "PyTorch"],
    category: "AI",
    github: "https://github.com/Sunil0012",
    year: "2024",
  },
  {
    title: "Weed Removal System",
    desc: "Computer vision system to detect and identify weeds in agricultural fields using OpenCV image processing.",
    tags: ["OpenCV", "Computer Vision"],
    category: "AI",
    github: "https://github.com/Sunil0012/WeedRemoval",
    year: "2024",
  },
  {
    title: "GATE DA Prep Platform",
    desc: "Comprehensive curated study resources for GATE Data Science and AI preparation with structured learning materials.",
    tags: ["Python", "DSA", "ML"],
    category: "Web",
    github: "https://github.com/Sunil0012/gate-da-prep",
    year: "2024",
  },
];

const filters = ["All", "AI", "Data", "Web"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Selected Work</p>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em]">
                Projects
              </h2>
            </div>
            <div className="flex gap-1">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className={`text-xs uppercase tracking-[0.15em] px-4 py-2 transition-all duration-300 ${
                    active === f
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-0">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group block border-t border-border py-8 hover:bg-card/30 transition-colors duration-500 px-4 -mx-4"
                >
                  <div className="grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-12 sm:col-span-5 flex items-start justify-between">
                      <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <ArrowUpRight
                        size={20}
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 sm:hidden"
                      />
                    </div>
                    <div className="col-span-12 sm:col-span-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{project.desc}</p>
                    </div>
                    <div className="col-span-12 sm:col-span-2">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span key={tag} className="text-[11px] uppercase tracking-wider text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="hidden sm:flex col-span-1 items-center justify-end">
                      <ArrowUpRight
                        size={20}
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                      />
                    </div>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
            <div className="border-t border-border" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "TCS Stock Analysis",
    desc: "Performed exploratory and time-series analysis on TCS stock data. Applied moving averages and volatility tracking to identify trading trends.",
    tags: ["Python", "Pandas", "Matplotlib", "Time Series"],
    category: "Data",
    github: "https://github.com/Sunil0012",
    metric: "Time Series",
  },
  {
    title: "Uber Trip Analysis",
    desc: "Analyzed Uber trip data to identify peak demand regions and optimize driver allocation. Created interactive dashboards to visualize ride frequency and revenue trends.",
    tags: ["Python", "Tableau", "Plotly", "Pandas"],
    category: "Data",
    github: "https://github.com/Sunil0012",
    metric: "Dashboard",
  },
  {
    title: "Mental Illness Detection",
    desc: "Building a deep learning framework for early mental illness detection using social media text data. Evaluating classical ML and transformer-based architectures.",
    tags: ["NLP", "BERT", "CNN", "LSTM", "PyTorch"],
    category: "AI",
    github: "https://github.com/Sunil0012",
    metric: "Deep Learning",
  },
  {
    title: "Weed Removal System",
    desc: "Developed a computer vision-based system to detect and identify weeds in agricultural fields using OpenCV image processing techniques.",
    tags: ["Python", "OpenCV", "Computer Vision", "NumPy"],
    category: "AI",
    github: "https://github.com/Sunil0012/WeedRemoval",
    metric: "CV Pipeline",
  },
  {
    title: "GATE DA Prep Platform",
    desc: "Curated comprehensive study resources for GATE Data Science and AI preparation. Structured learning materials for streamlined exam prep.",
    tags: ["Python", "DSA", "ML", "SQL"],
    category: "Web",
    github: "https://github.com/Sunil0012/gate-da-prep",
    metric: "Resource Hub",
  },
];

const filters = ["All", "AI", "Data", "Web"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
            Grid <span className="text-gradient">Matrix</span>
          </h2>

          {/* Filters */}
          <div className="flex gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-mono text-xs tracking-wider px-4 py-2 rounded-xl transition-all ${
                  active === f
                    ? "bg-primary text-primary-foreground glow-primary"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <motion.div
                  key={project.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="group relative overflow-hidden glass rounded-3xl"
                >
                  {/* Top gradient bar */}
                  <div className="h-1 bg-gradient-to-r from-primary to-accent" />

                  <div className="p-6">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] uppercase tracking-widest text-primary bg-primary/10 px-2 py-1 rounded-lg"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.desc}</p>

                    {/* Metric bar */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-[10px] text-primary/70 uppercase tracking-wider">
                        {project.metric}
                      </span>
                      <div className="h-1 flex-1 mx-3 rounded-full bg-card overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full w-3/4" />
                      </div>
                    </div>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={14} />
                      View Code
                      <ExternalLink size={12} />
                    </a>
                  </div>

                  {/* Glass overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

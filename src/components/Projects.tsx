import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import imgGateway from "@/assets/proj-gateway.jpg";
import imgAgribot from "@/assets/proj-agribot.jpg";
import imgEmocare from "@/assets/proj-emocare.jpg";
import imgKalashetra from "@/assets/proj-kalashetra.jpg";

const projects = [
  {
    title: "GATEWay",
    subtitle: "Adaptive Learning Platform",
    desc:
      "Architected ELO-based skill tracking, weak-topic detection, and a graph-based recommendation engine, reducing study redundancy by 40% in pilot tests. Integrated a Supabase backend with real-time analytics, OAuth2 auth, and a React + Node.js frontend achieving sub-200ms query response times.",
    tags: ["React", "Node.js", "Supabase", "ELO", "Graphs"],
    category: "AI",
    href: "https://github.com/Sunil0012",
    year: "2026",
    image: imgGateway,
    alt: "Glowing gold knowledge graph representing GATEWay's adaptive recommendation engine",
  },
  {
    title: "AgriBot",
    subtitle: "Weed Detection System",
    desc:
      "Built a CNN-based weed detection pipeline (YOLOv11n + Intel RealSense D435i) achieving ~92% mAP@50, deployed on a physical rover via a Flask API for real-world field use.",
    tags: ["YOLOv11n", "OpenCV", "Flask", "Robotics"],
    category: "AI",
    href: "https://github.com/Sunil0012/WeedRemoval",
    year: "2024",
    image: imgAgribot,
    alt: "Agricultural robot rover with a depth camera scanning crop rows at golden hour",
  },
  {
    title: "EmoCare",
    subtitle: "Mental Health Detection via NLP",
    desc:
      "Built a multi-model NLP pipeline (BERT, CNN, LSTM) achieving 88%+ accuracy on mental health benchmarks, wrapped in a Streamlit chatbot interface for accessible early screening.",
    tags: ["BERT", "PyTorch", "LSTM", "Streamlit"],
    category: "AI",
    href: "https://github.com/Sunil0012",
    year: "2025",
    image: imgEmocare,
    alt: "Gold wireframe human head profile made of flowing particle lines",
  },
  {
    title: "Kalashetra",
    subtitle: "Fine Art Auctions Platform",
    desc:
      "Founded and shipped a live full-stack fine art auction platform, supported by India Art Fair — real-time bidding, artist onboarding, and a gallery-grade browsing experience.",
    tags: ["React", "Node.js", "Full Stack", "Product"],
    category: "Web",
    href: "https://thekalashetra.vercel.app",
    year: "2025",
    image: imgKalashetra,
    alt: "Gilded picture frames lit in a dark gallery space",
  },
];

const more = [
  { title: "Pacman AI", desc: "A*-driven ghost AI agents built in Python.", tags: ["Python", "A*"], category: "AI" },
  {
    title: "TCS Stock Forecasting",
    desc: "ARIMA + LSTM hybrid forecasting achieving 18% lower RMSE than baseline.",
    tags: ["ARIMA", "LSTM", "Time Series"],
    category: "Data",
  },
  {
    title: "Uber Peak-Demand Analytics",
    desc: "Peak-demand and driver-allocation analytics with Plotly and Power BI dashboards.",
    tags: ["Plotly", "Power BI"],
    category: "Data",
  },
];

const filters = ["All", "AI", "Data", "Web"];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);
  const filteredMore = active === "All" ? more : more.filter((p) => p.category === active);

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

          <div className="grid md:grid-cols-2 gap-px bg-border">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.a
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group block bg-background p-6 sm:p-8"
                >
                  <div className="relative overflow-hidden mb-6 aspect-[3/2]">
                    <img
                      src={project.image}
                      alt={project.alt}
                      loading="lazy"
                      width={1200}
                      height={800}
                      className="h-full w-full object-cover grayscale-[35%] group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                    <span className="absolute top-3 right-3 font-mono text-[11px] text-muted-foreground">
                      {project.year}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div>
                      <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                        {project.subtitle}
                      </p>
                    </div>
                    <ArrowUpRight
                      size={20}
                      className="shrink-0 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed my-4">{project.desc}</p>

                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[11px] uppercase tracking-wider text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>

          {filteredMore.length > 0 && (
            <div className="mt-20">
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-8">Also built</p>
              <div className="space-y-0">
                {filteredMore.map((p) => (
                  <div
                    key={p.title}
                    className="grid grid-cols-12 gap-4 border-t border-border py-6 hover:bg-card/30 transition-colors duration-500 px-4 -mx-4"
                  >
                    <div className="col-span-12 sm:col-span-4">
                      <h3 className="font-display text-lg font-bold text-foreground">{p.title}</h3>
                    </div>
                    <div className="col-span-12 sm:col-span-5">
                      <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                    </div>
                    <div className="col-span-12 sm:col-span-3 flex flex-wrap gap-3 sm:justify-end">
                      {p.tags.map((tag) => (
                        <span key={tag} className="text-[11px] uppercase tracking-wider text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="border-t border-border" />
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

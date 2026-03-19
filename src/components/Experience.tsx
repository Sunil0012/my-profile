import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "Operations Head",
    company: "DesignX, IIT Bhilai",
    period: "July 2025 – Present",
    points: [
      "Conducted college sessions and workshops on design, creativity, and related technologies.",
      "Led hands-on Blender workshops for 50+ students, improving technical skill engagement by 25%.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Unified Mentor",
    period: "Apr 2025 – Aug 2025",
    points: [
      "Cleaned and analyzed 10,000+ records using Python (Pandas) and SQL, identifying key customer segments.",
      "Built interactive Tableau dashboards tracking KPIs, saving 3+ hours weekly on manual aggregation.",
    ],
  },
  {
    role: "Robotics & AI Intern",
    company: "My Equation",
    period: "Nov 2024 – Jan 2025",
    points: [
      "Designed CAD models for robotics components enhancing automation processes.",
      "Implemented pathfinding algorithm reducing robot task completion time by 15%.",
    ],
  },
];

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">Experience</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Timeline <span className="text-gradient">Ledger</span>
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative pl-12 group"
              >
                {/* Node */}
                <div className="absolute left-2 top-2 w-5 h-5 rounded-full border-2 border-primary bg-background flex items-center justify-center group-hover:glow-primary transition-shadow">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>

                <div className="glass rounded-3xl p-6 hover:border-primary/20 transition-all duration-300 relative overflow-hidden">
                  {/* Scanline hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Briefcase size={14} className="text-primary" />
                    <h3 className="font-bold text-foreground">{exp.role}</h3>
                    <span className="text-xs font-mono text-muted-foreground">· {exp.company}</span>
                  </div>
                  <p className="font-mono text-xs text-primary/80 mb-4">{exp.period}</p>
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed flex gap-2">
                        <span className="text-primary mt-1.5 shrink-0">▸</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;

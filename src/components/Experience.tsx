import { motion } from "framer-motion";

const experiences = [
  {
    role: "Apprentice",
    company: "ShikshaSarthi — under Dr. Gagan Raj Gupta, CSE, IIT Bhilai",
    period: "May 2026 — Jul 2026",
    index: "01",
    points: [
      "Built the complete offline-first school learning & quiz platform end-to-end and converted it into a deployable app, rolled out across multiple schools.",
      "Implemented the MARS (Momentum-Aware Adaptive Rating System) algorithm as the platform's adaptive-testing engine, powering real-time learner rating and question routing.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Unified Mentor",
    period: "Apr 2025 — Aug 2025",
    index: "02",
    points: [
      "Cleaned and analyzed 10,000+ records using Python (Pandas) and SQL, uncovering customer segments that informed business strategy.",
      "Built Tableau dashboards automating reporting, saving 3+ hours/week; identified churn patterns via cohort analysis for stakeholder presentations.",
    ],
  },
  {
    role: "Robotics & AI Intern",
    company: "RoboAI",
    period: "Nov 2024 — Jan 2025",
    index: "03",
    points: [
      "Designed CAD models and implemented pathfinding algorithms (A*, Dijkstra), improving automation efficiency by 15%.",
      "Integrated computer-vision modules into robotic pipelines, accelerating object detection in constrained hardware environments.",
    ],
  },
];

const leadership = [
  { role: "Operations Head — DesignX, IIT Bhilai", period: "Jul 2025 — Apr 2026" },
  { role: "Head of 3D Modeling — DesignX, IIT Bhilai", period: "Jul 2024 — Apr 2025" },
  { role: "Founder — Kalashetra Fine Art Auctions", period: "Supported by India Art Fair" },
  { role: "Media Head — FinTech, IIT Bhilai", period: "Aug 2024 — May 2025" },
];

const Experience = () => (
  <section id="experience" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Experience</p>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] mb-16">
          Where I've worked
        </h2>

        <div className="space-y-0">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group border-t border-border py-10 hover:bg-card/30 transition-colors duration-500 px-4 -mx-4"
            >
              <div className="grid grid-cols-12 gap-4 items-start">
                <div className="col-span-1 hidden sm:block">
                  <span className="font-mono text-xs text-muted-foreground">{exp.index}</span>
                </div>
                <div className="col-span-12 sm:col-span-4">
                  <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                </div>
                <div className="col-span-12 sm:col-span-2">
                  <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                </div>
                <div className="col-span-12 sm:col-span-5">
                  <ul className="space-y-2">
                    {exp.points.map((point, j) => (
                      <li key={j} className="text-sm text-muted-foreground leading-relaxed">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>

        {/* Leadership */}
        <div className="mt-24">
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-8">Leadership</p>
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {leadership.map((l) => (
              <div key={l.role} className="bg-background p-6">
                <p className="text-sm text-foreground mb-1">{l.role}</p>
                <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{l.period}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience;

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Operations Head",
    company: "DesignX, IIT Bhilai",
    period: "2025 — Present",
    index: "01",
    points: [
      "Conducted college sessions and workshops on design, creativity, and related technologies.",
      "Led hands-on Blender workshops for 50+ students, improving technical skill engagement by 25%.",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Unified Mentor",
    period: "Apr — Aug 2025",
    index: "02",
    points: [
      "Cleaned and analyzed 10,000+ records using Python (Pandas) and SQL, identifying key customer segments.",
      "Built interactive Tableau dashboards tracking KPIs, saving 3+ hours weekly on manual aggregation.",
    ],
  },
  {
    role: "Robotics & AI Intern",
    company: "My Equation",
    period: "Nov 2024 — Jan 2025",
    index: "03",
    points: [
      "Designed CAD models for robotics components enhancing automation processes.",
      "Implemented pathfinding algorithm reducing robot task completion time by 15%.",
    ],
  },
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
      </motion.div>
    </div>
  </section>
);

export default Experience;

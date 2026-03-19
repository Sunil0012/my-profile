import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Programming",
    color: "primary",
    skills: ["Python", "C", "C++", "SQL", "Bash"],
  },
  {
    title: "Full Stack",
    color: "primary",
    skills: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    title: "Data Science & ML",
    color: "primary",
    skills: ["Scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy", "SciPy", "Statsmodels"],
  },
  {
    title: "Deep Learning & AI",
    color: "accent",
    skills: ["Neural Networks", "CNNs", "RNNs", "Transformers", "NLP", "Computer Vision", "Transfer Learning"],
  },
  {
    title: "Visualization",
    color: "primary",
    skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI", "Excel"],
  },
  {
    title: "Databases & Big Data",
    color: "primary",
    skills: ["MySQL", "PostgreSQL", "SQLite", "MongoDB", "Hadoop", "Spark"],
  },
  {
    title: "MLOps & Tools",
    color: "primary",
    skills: ["Flask", "Streamlit", "Docker", "Git", "GitHub Actions"],
  },
  {
    title: "Design",
    color: "accent",
    skills: ["Blender", "Figma", "Photoshop", "After Effects"],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">Skills</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12">
          Tech Stack <span className="text-gradient">Radar</span>
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className={`glass rounded-3xl p-6 hover:border-${cat.color}/30 transition-all duration-300 group`}
            >
              <h3 className={`font-semibold text-sm mb-4 ${cat.color === "accent" ? "text-accent" : "text-primary"}`}>
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-lg transition-colors ${
                      cat.color === "accent"
                        ? "text-accent bg-accent/10 group-hover:bg-accent/20"
                        : "text-primary bg-primary/10 group-hover:bg-primary/20"
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Skills;

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "AI / ML",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "BERT", "CNNs", "LSTMs", "Transformers", "Computer Vision", "NLP"],
  },
  {
    title: "Languages",
    skills: ["Python", "C", "C++", "SQL", "JavaScript", "Bash"],
  },
  {
    title: "Data & Visualization",
    skills: ["Pandas", "NumPy", "Plotly", "Tableau", "Power BI", "Excel"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Hadoop", "Spark"],
  },
  {
    title: "Full Stack & Tools",
    skills: ["React", "Node.js", "Express.js", "REST APIs", "Flask", "Streamlit", "Git", "Docker"],
  },
  {
    title: "Design & 3D",
    skills: ["Blender", "Figma", "Photoshop", "After Effects", "CAD Modeling"],
  },
];

const Skills = () => (
  <section id="skills" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Expertise</p>
        <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-[-0.03em] mb-16">
          Technical arsenal
        </h2>

        <div className="space-y-0">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              className="grid grid-cols-12 gap-4 py-6 border-b border-border group hover:bg-card/50 transition-colors duration-300 px-4 -mx-4"
            >
              <div className="col-span-12 sm:col-span-3">
                <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary transition-colors duration-300">
                  {cat.title}
                </span>
              </div>
              <div className="col-span-12 sm:col-span-9 flex flex-wrap gap-3">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300 cursor-default"
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

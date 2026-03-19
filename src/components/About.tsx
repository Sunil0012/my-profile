import { motion } from "framer-motion";
import { Brain, Palette, BarChart3, GraduationCap } from "lucide-react";

const highlights = [
  { icon: Brain, label: "AI & ML", desc: "Deep Learning, NLP, Computer Vision" },
  { icon: BarChart3, label: "Data Science", desc: "Analysis, Visualization, Insights" },
  { icon: Palette, label: "3D Design", desc: "Blender, Figma, Photoshop" },
  { icon: GraduationCap, label: "IIT Bhilai", desc: "CGPA: 7.84 · DS&AI" },
];

const About = () => (
  <section id="about" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-3">About</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-8">
          Data Scientist. <span className="text-gradient">Creative Thinker.</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <p className="text-muted-foreground leading-relaxed">
            I am a third-year B.Tech student specializing in Data Science and Artificial Intelligence at IIT Bhilai.
            I blend technical expertise in data analysis, AI, and machine learning with creative problem-solving through 3D art and design.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            I excel at merging artistic expression with computational techniques to create innovative solutions.
            My goal is to build intelligent systems that bridge the gap between{" "}
            <span className="font-mono text-primary">7.84 CGPA</span> precision and 3D spatial creativity.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-3xl p-6 group hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold text-sm text-foreground mb-1">{label}</h3>
              <p className="text-xs text-muted-foreground">{desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;

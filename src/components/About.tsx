import { motion } from "framer-motion";

const stats = [
  { value: "7.66", label: "CGPA / 10" },
  { value: "3", label: "Internships" },
  { value: "1", label: "IEEE Paper" },
  { value: "10+", label: "Projects" },
];

const facts = [
  { k: "Education", v: "B.Tech Data Science & AI — IIT Bhilai (2023–2027)" },
  { k: "Focus", v: "Adaptive learning systems, applied ML, computer vision, NLP" },
  { k: "Based in", v: "Bhilai, Chhattisgarh, India" },
  { k: "Currently", v: "Building GATEWay & MARS-powered assessment engines" },
];

const About = () => (
  <section id="about" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">About</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1] mb-8">
              Research-grade ML,<br />
              <span className="text-muted-foreground">shipped to production</span>
            </h2>

            <dl className="mt-12 border-t border-border">
              {facts.map((f) => (
                <div key={f.k} className="grid grid-cols-3 gap-4 py-4 border-b border-border">
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.k}</dt>
                  <dd className="col-span-2 text-sm text-foreground/85">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:pt-16">
            <p className="text-muted-foreground leading-[1.8] mb-6">
              I'm a final-year B.Tech student in Data Science & Artificial Intelligence at IIT Bhilai,
              with hands-on experience deploying adaptive machine learning systems in live school
              environments. I built and shipped an ELO- and graph-based adaptive learning platform, plus
              a momentum-aware assessment algorithm now running in production.
            </p>
            <p className="text-muted-foreground leading-[1.8] mb-6">
              My work sits where research rigour meets engineering delivery: designing the algorithm,
              training the model, wiring the backend, and rolling it out to real users across multiple
              schools — not stopping at a notebook.
            </p>
            <p className="text-muted-foreground leading-[1.8] mb-12">
              Outside the terminal I'm a 3D artist and designer — former Head of 3D Modeling and
              Operations Head at DesignX, IIT Bhilai — and the founder of Kalashetra Fine Art Auctions,
              a live art auction platform supported by India Art Fair.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-background p-6 text-center"
                >
                  <p className="font-display text-3xl font-extrabold text-foreground mb-1">{stat.value}</p>
                  <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default About;

import { motion } from "framer-motion";

const stats = [
  { value: "7.84", label: "CGPA" },
  { value: "3+", label: "Internships" },
  { value: "10+", label: "Projects" },
  { value: "50+", label: "Students Led" },
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
          {/* Left */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">About</p>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1] mb-8">
              Data meets<br />
              <span className="text-muted-foreground">creativity</span>
            </h2>
          </div>

          {/* Right */}
          <div className="lg:pt-16">
            <p className="text-muted-foreground leading-[1.8] mb-6">
              Third-year B.Tech student specializing in Data Science and Artificial Intelligence at IIT Bhilai.
              I blend technical expertise in data analysis, AI, and machine learning with creative problem-solving
              through 3D art and design.
            </p>
            <p className="text-muted-foreground leading-[1.8] mb-12">
              My unique intersection of analytical precision and spatial creativity allows me to approach problems
              from multiple dimensions — building intelligent systems that are both functionally robust and
              aesthetically compelling.
            </p>

            {/* Stats */}
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

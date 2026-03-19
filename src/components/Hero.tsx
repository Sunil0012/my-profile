import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "Data Science & AI Student",
  "Data Analyst",
  "3D Artist",
  "Machine Learning Engineer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 2000);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 30);
      } else {
        setRoleIndex((prev) => (prev + 1) % roles.length);
        setTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayed, typing, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32">
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-primary mb-6">
            IIT Bhilai · B.Tech Data Science & AI
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.04em] leading-[0.95] mb-6">
            <span className="text-foreground">Khethavath</span>
            <br />
            <span className="text-gradient">Sunil Naik</span>
          </h1>

          <div className="h-8 mb-8">
            <span className="font-mono text-lg text-muted-foreground">
              {displayed}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>

          <p className="text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            Synthesizing data into intelligence. Bridging analytical precision with
            3D spatial creativity to build systems that matter.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm glow-primary hover:brightness-110 transition-all"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 glass text-foreground px-6 py-3 rounded-xl font-semibold text-sm hover:bg-card/80 transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="flex items-center justify-center gap-5">
            {[
              { icon: Github, href: "https://github.com/Sunil0012" },
              { icon: Linkedin, href: "https://www.linkedin.com/in/khethavath-sunil-naik-79a618237/" },
              { icon: Mail, href: "mailto:sunilnaikkethavath@gmail.com" },
            ].map(({ icon: Icon, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass rounded-xl text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground animate-float"
        >
          <ArrowDown size={20} />
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;

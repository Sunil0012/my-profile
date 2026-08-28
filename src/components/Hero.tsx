import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import portrait from "@/assets/sunil-portrait.jpg";

const roles = [
  "Data Science & AI @ IIT Bhilai",
  "Machine Learning Engineer",
  "Full-Stack Developer",
  "3D Artist & Designer",
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-between px-6 md:px-12 lg:px-24 pt-32 pb-12 overflow-hidden">
      {/* Portrait blended into the background */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute inset-y-0 right-0 w-full lg:w-[58%] z-0"
        aria-hidden="true"
      >
        <img
          src={portrait}
          alt=""
          className="h-full w-full object-cover object-[78%_18%] portrait-blend"
        />
        <div className="absolute inset-0 hero-veil" />
      </motion.div>

      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8"
          >
            IIT Bhilai — B.Tech Data Science & AI, 2023–2027
          </motion.p>

          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.04em]"
            >
              Khethavath
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.45, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(2.5rem,8vw,7rem)] font-extrabold leading-[0.9] tracking-[-0.04em]"
            >
              Sunil <span className="text-gradient">Naik</span>
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="w-12 h-px bg-primary" />
            <div className="h-8 overflow-hidden">
              <motion.span
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="block text-lg text-muted-foreground font-light"
              >
                {roles[roleIndex]}
              </motion.span>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="max-w-xl text-muted-foreground leading-relaxed mb-12"
          >
            Final-year B.Tech student shipping adaptive machine learning systems into live school
            environments. Author of <span className="text-foreground">MARS</span>, a momentum-aware
            adaptive rating algorithm submitted to IEEE DSAA 2026 — and a full-stack engineer who takes
            ML from prototype to production.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-wrap items-center gap-6"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-foreground transition-colors duration-300"
            >
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="/Resume.pdf"
              download
              className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground border-b border-muted-foreground hover:border-foreground pb-1 transition-all duration-300"
            >
              Download Résumé
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="relative z-10 flex items-center justify-between border-t border-border pt-6"
      >
        <div className="flex flex-wrap items-center gap-6 sm:gap-8">
          {[
            { label: "GitHub", href: "https://github.com/Sunil0012" },
            { label: "LinkedIn", href: "https://www.linkedin.com/in/khethavath-sunil-naik-79a618237/" },
            { label: "Kalashetra", href: "https://thekalashetra.vercel.app" },
            { label: "Email", href: "mailto:sunilnaikkethavath@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {label}
            </a>
          ))}
        </div>
        <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
          <ArrowDown size={16} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;

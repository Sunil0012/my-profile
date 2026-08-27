import { motion } from "framer-motion";

const Publication = () => (
  <section id="publication" className="section-padding">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="border-t border-border pt-12"
      >
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Publication</p>
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] leading-[1.05] mb-4">
              MARS: Momentum-Aware<br />Adaptive Rating System
            </h2>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Submitted — IEEE DSAA 2026
            </p>
          </div>
          <div className="lg:col-span-6 lg:pt-4">
            <p className="text-muted-foreground leading-[1.8] mb-6">
              A graph-based adaptive assessment algorithm combining momentum-aware rating updates,
              response-quality scoring, and time-budgeted question routing — so a learner's trajectory,
              not just their last answer, shapes what they see next.
            </p>
            <p className="text-muted-foreground leading-[1.8]">
              Deployed in production inside <span className="text-foreground">ShikshaSarthi</span> and{" "}
              <span className="text-foreground">GATEWay</span>, serving live classrooms across multiple
              schools.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Publication;

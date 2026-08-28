import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const publications = [
  {
    title: "MARS: Momentum-Aware Adaptive Rating System",
    status: "Accepted",
    venue: "IEEE DSAA 2026",
    topic: "Data Science for Social Good",
    description:
      "A graph-based adaptive assessment algorithm combining momentum-aware rating updates, response-quality scoring, and time-budgeted question routing — so a learner's trajectory, not just their last answer, shapes what they see next. Deployed in production inside ShikshaSarthi and GATEWay, serving live classrooms across multiple schools.",
    keywords: [
      "Adaptive Assessment",
      "Educational Data Mining",
      "Elo Rating",
      "Momentum",
      "Knowledge Tracing",
      "Graph-Based Recommendation",
      "Time-Budgeted Assessment",
      "Learner Modeling",
    ],
    link: null as string | null,
  },
  {
    title:
      "VeriFlow: Counterfactual Root-Cause Localization and Contract-Verified Schema Repair for Streaming Data Pipelines",
    status: "Submitted",
    venue: "IEEE BigData 2026",
    topic:
      "1.c: Data & Information Quality for Big Data · 3.a: Data Acquisition, Integration, Cleaning & Best Practices",
    description:
      "A diagnosis-and-repair pipeline for streaming data that stays off the live data path. VeriFlow tracks operators, schema versions, and violations over time; ranks likely root causes with counterfactual replay on a mirrored window; searches a typed repair language; and accepts a repair only when Z3 formally verifies it against the data contract. Built on a Kafka-compatible broker, Spark Structured Streaming, and PostgreSQL — replay lifts Top-1 localization from 61.7% to 100%, and full-window verification eliminates the 43.3% wrong-accept rate of sample-based policies.",
    keywords: [
      "Streaming Data Quality",
      "Schema Drift Repair",
      "Root-Cause Localization",
      "Data Contracts",
      "Formal Verification",
    ],
    link: "https://github.com/Sunil0012/IEEE-BigData-2026",
  },
];

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
        <p className="text-xs uppercase tracking-[0.3em] text-primary mb-12">Publications</p>

        <div className="space-y-20">
          {publications.map((pub, i) => (
            <motion.article
              key={pub.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="grid lg:grid-cols-12 gap-8"
            >
              <div className="lg:col-span-6">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className={`text-[10px] uppercase tracking-[0.25em] px-3 py-1 border ${
                      pub.status === "Accepted"
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {pub.status}
                  </span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {pub.venue}
                  </span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-[-0.03em] leading-[1.1] mb-4">
                  {pub.title}
                </h2>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground leading-relaxed">
                  {pub.topic}
                </p>
                {pub.link && (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-xs uppercase tracking-[0.2em] text-primary hover:text-foreground transition-colors duration-300"
                  >
                    Code & Replication <ArrowUpRight size={12} />
                  </a>
                )}
              </div>
              <div className="lg:col-span-6 lg:pt-4">
                <p className="text-muted-foreground leading-[1.8] mb-6">{pub.description}</p>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground border border-border px-3 py-1.5 hover:border-primary hover:text-primary transition-colors duration-300"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Publication;

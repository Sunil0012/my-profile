import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    window.open(`mailto:sunilnaikkethavath@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}`);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Contact</p>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.03em] leading-[1] mb-10">
                Let's work<br />together
              </h2>
              <p className="text-muted-foreground leading-[1.8] mb-12">
                Open to full-time roles, research collaborations, and freelance work in data science,
                machine learning, and full-stack product engineering.
              </p>

              <div className="space-y-4">
                {[
                  { label: "sunilnaikkethavath@gmail.com", href: "mailto:sunilnaikkethavath@gmail.com" },
                  { label: "+91-9346739056", href: "tel:+919346739056" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/khethavath-sunil-naik-79a618237/" },
                  { label: "GitHub", href: "https://github.com/Sunil0012" },
                  { label: "thekalashetra.vercel.app", href: "https://thekalashetra.vercel.app" },
                ].map(({ label, href }) => (

                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-4 border-b border-border hover:border-primary transition-colors duration-300"
                  >
                    <span className="text-sm text-foreground group-hover:text-primary transition-colors duration-300">
                      {label}
                    </span>
                    <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 lg:pt-16">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Name</label>
                <input
                  type="text"
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="Your name"
                />
                {errors.name && <p className="text-destructive text-xs mt-2">{errors.name}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Email</label>
                <input
                  type="email"
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-destructive text-xs mt-2">{errors.email}</p>}
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-2 block">Message</label>
                <textarea
                  rows={4}
                  maxLength={1000}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-destructive text-xs mt-2">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="self-start bg-primary text-primary-foreground px-10 py-4 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-foreground transition-colors duration-300 mt-4"
              >
                Send message →
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

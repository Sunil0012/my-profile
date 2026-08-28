const Footer = () => (
  <footer className="px-6 md:px-12 lg:px-24 py-8 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <p className="text-xs text-muted-foreground tracking-wider">
        © {new Date().getFullYear()} Khethavath Sunil Naik
      </p>
      <div className="flex items-center gap-8">
        {[
          { label: "GitHub", href: "https://github.com/Sunil0012" },
          { label: "LinkedIn", href: "https://www.linkedin.com/in/khethavath-sunil-naik-79a618237/" },
          { label: "Kalashetra", href: "https://thekalashetra.vercel.app" },
          { label: "Résumé", href: "/Resume.pdf" },
          { label: "Email", href: "mailto:sunilnaikkethavath@gmail.com" },
        ].map(({ label, href }) => (

          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;

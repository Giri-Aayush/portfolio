import { Icon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="wrap relative">
        <div className="seclabel reveal mb-6">Contact · say hi</div>
        <h2
          className="display reveal d-1 relative"
          style={{
            fontSize: "clamp(56px, 10vw, 140px)",
            lineHeight: 1.02,
            paddingBottom: "0.18em",
            marginBottom: "2.5rem",
          }}
        >
          Let&apos;s
          <br />
          <span className="cyan-hl">build</span> something
          <br />
          good together.
        </h2>
        <div className="reveal d-2 relative flex gap-3 flex-wrap">
          <a
            href="mailto:aayushgiri1234@gmail.com"
            className="btn btn-cyan"
            style={{ padding: "16px 26px", fontSize: 16 }}
          >
            aayushgiri1234@gmail.com <span className="btn-arrow"><Icon.arrow /></span>
          </a>
          <a
            href="https://cal.com/aayush-giri/quicksync"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ padding: "16px 26px", fontSize: 16 }}
          >
            Book a 20-min call <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
      <footer
        className="mt-20 pt-10 pb-10"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="wrap">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-5 flex-wrap">
            <div className="mono">
              © {new Date().getFullYear()} · Remote / Global
            </div>
            <div className="flex gap-[18px] mono">
              <a
                href="https://github.com/Giri-Aayush"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--cyan)] transition-colors"
              >
                GitHub ↗
              </a>
              <a
                href="https://x.com/AayushStack"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--cyan)] transition-colors"
              >
                X ↗
              </a>
              <a
                href="https://www.linkedin.com/in/aayush-giri/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--cyan)] transition-colors"
              >
                LinkedIn ↗
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--cyan)] transition-colors"
              >
                Resume ↗
              </a>
            </div>
            <div className="mono">v4.0 · hand-built</div>
          </div>
        </div>
      </footer>
    </section>
  );
}

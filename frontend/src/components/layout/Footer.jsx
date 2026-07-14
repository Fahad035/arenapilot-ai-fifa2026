import { FaGithub } from "react-icons/fa";

const Footer = () => {

  return (
    <footer
      className="border-t"
      style={{
        borderColor: "var(--border)",
        background: "var(--panel-bg)",
        color: "var(--muted)",
      }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-sm md:flex-row">
        <p>
          © {new Date().getFullYear()} ArenaPilot AI. All rights reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Fahad035/arenapilot-ai-fifa2026"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
            style={{ color: "var(--muted)" }}
          >
            <FaGithub size={18} />
          </a>

          <span className="flex items-center gap-2">
            <span style={{ color: "var(--muted)" }}>Built with</span>
            <span className="text-sky-400">React + Gemini</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

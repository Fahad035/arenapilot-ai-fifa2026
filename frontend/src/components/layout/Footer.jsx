import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-8 text-sm text-slate-400 md:flex-row">

        <p>
          © {new Date().getFullYear()} ArenaPilot AI.
          All rights reserved.
        </p>

        <div className="flex items-center gap-5">

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-white"
          >
            <FaGithub size={18} />
          </a>

          <span className="flex items-center gap-2">
            Built with
            React + Gemini
          </span>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
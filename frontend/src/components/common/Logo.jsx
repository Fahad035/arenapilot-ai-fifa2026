import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link
      to="/"
      aria-label="ArenaPilot Home"
      className="group flex items-center gap-3"
    >
      {/* Brand Mark */}
      <div className="transition-transform duration-300 group-hover:scale-105">
        <svg
          viewBox="0 0 64 64"
          className="h-11 w-11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Stadium Roof */}
          <path
            d="M12 20L32 8L52 20"
            stroke="url(#grad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Left Pillar */}
          <path
            d="M22 46L32 20"
            stroke="url(#grad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Right Pillar */}
          <path
            d="M42 46L32 20"
            stroke="url(#grad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Crossbar */}
          <path
            d="M27 34H37"
            stroke="url(#grad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Stadium Arc */}
          <path
            d="M16 48C22 54 42 54 48 48"
            stroke="url(#grad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Navigation Arrow */}
          <path
            d="M32 8L35.5 15L32 13L28.5 15L32 8Z"
            fill="#38BDF8"
          />

          <defs>
            <linearGradient
              id="grad"
              x1="0"
              y1="0"
              x2="64"
              y2="64"
            >
              <stop stopColor="#2563EB" />
              <stop offset="1" stopColor="#22D3EE" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Name */}
      <div className="leading-tight">
        <h1 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-blue-400">
          ArenaPilot
        </h1>

        <p className="text-sm text-slate-400">
          AI Operations Copilot
        </p>
      </div>
    </Link>
  );
};

export default Logo;
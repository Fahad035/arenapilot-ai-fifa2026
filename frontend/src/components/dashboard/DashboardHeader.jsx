import {
  FaCircle,
  FaMapMarkerAlt,
  FaFutbol,
  FaCalendarAlt,
} from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white">
            ArenaPilot AI
          </h1>

          <p className="mt-1 text-sm text-slate-400">
            Stadium Operations Copilot for FIFA World Cup 2026
          </p>
        </div>

        {/* Right */}
        <div className="hidden items-center gap-4 lg:flex">

          {/* Venue */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500">
              <FaMapMarkerAlt className="text-blue-400" />
              Venue
            </div>

            <p className="mt-1 text-sm font-semibold text-white">
              Estadio Azteca
            </p>
          </div>

          {/* Match */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500">
              <FaFutbol className="text-emerald-400" />
              Match
            </div>

            <p className="mt-1 text-sm font-semibold text-white">
              Brazil vs Spain
            </p>
          </div>

          {/* Date */}
          <div className="rounded-xl border border-slate-800 bg-slate-900 px-4 py-3">
            <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-500">
              <FaCalendarAlt className="text-orange-400" />
              Date
            </div>

            <p className="mt-1 text-sm font-semibold text-white">
              14 Jun 2026
            </p>
          </div>

          {/* AI Status */}
          <div className="rounded-xl border border-emerald-700/40 bg-emerald-500/10 px-5 py-3">
            <div className="flex items-center gap-2">
              <FaCircle className="animate-pulse text-[10px] text-emerald-400" />

              <span className="text-sm font-semibold text-emerald-300">
                Gemini Online
              </span>
            </div>

            <p className="mt-1 text-xs text-emerald-200/70">
              AI Operational Engine Ready
            </p>
          </div>

        </div>

      </div>
    </header>
  );
};

export default DashboardHeader; 
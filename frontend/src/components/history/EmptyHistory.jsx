import Card from "../ui/Card";

const EmptyHistory = () => {
  return (
    <Card>
      <div className="relative flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="relative">
          <div className="absolute -inset-6 rounded-full bg-blue-500/10 blur-xl" />
          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950">
            🗂️
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white md:text-3xl">
          No Analysis Available
        </h2>

        <p className="max-w-xl text-slate-400">
          Generate your first AI stadium analysis to build your
          history.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-2">
          <span className="rounded-full border border-slate-800 bg-slate-950 px-3 py-1 text-xs font-semibold text-slate-200">
            Tip
          </span>
          <span className="text-xs text-slate-400">
            Your saved scenarios will appear here.
          </span>
        </div>
      </div>
    </Card>
  );
};

export default EmptyHistory;

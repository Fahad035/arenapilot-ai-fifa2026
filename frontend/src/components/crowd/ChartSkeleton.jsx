import Card from "../ui/Card";

const ChartSkeleton = () => (
  <Card className="h-full animate-pulse">
    <div className="mb-8 flex items-center justify-between">
      <div className="space-y-2">
        <div className="h-5 w-48 rounded bg-slate-800" />
        <div className="h-3 w-36 rounded bg-slate-800" />
      </div>

      <div className="h-14 w-24 rounded-xl bg-slate-800" />
    </div>

    <div className="h-80 rounded-xl bg-slate-800 sm:h-90" />

    <div className="mt-8 grid grid-cols-3 gap-4">
      <div className="h-20 rounded-xl bg-slate-800" />
      <div className="h-20 rounded-xl bg-slate-800" />
      <div className="h-20 rounded-xl bg-slate-800" />
    </div>
  </Card>
);

export default ChartSkeleton;

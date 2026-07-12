import Card from "../ui/Card";

const SkeletonBlock = ({ className = "" }) => {
  return (
    <div
      className={`h-4 w-full animate-pulse rounded bg-slate-800/80 ${className}`}
    />
  );
};

const BriefingSkeleton = () => {
  return (
    <div className="space-y-8">
      <Card className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="h-10 w-56 animate-pulse rounded bg-slate-800/80" />
            <div className="mt-3 h-4 w-80 animate-pulse rounded bg-slate-800/80" />
          </div>
          <div className="h-11 w-28 animate-pulse rounded bg-slate-800/80" />
        </div>
        <div className="space-y-4">
          <SkeletonBlock className="h-6" />
          <SkeletonBlock className="h-4" />
          <SkeletonBlock className="h-4" />
        </div>
      </Card>

      <div className="grid gap-8 xl:grid-cols-2">
        <Card>
          <div className="space-y-4">
            <div className="h-8 w-64 animate-pulse rounded bg-slate-800/80" />
            <SkeletonBlock className="h-20" />
            <SkeletonBlock className="h-10" />
          </div>
        </Card>
        <Card>
          <div className="space-y-4">
            <div className="h-8 w-64 animate-pulse rounded bg-slate-800/80" />
            <SkeletonBlock className="h-20" />
            <SkeletonBlock className="h-10" />
          </div>
        </Card>
      </div>

      <Card className="space-y-6">
        <div className="h-8 w-56 animate-pulse rounded bg-slate-800/80" />
        <div className="grid gap-4 md:grid-cols-3">
          <div className="h-28 animate-pulse rounded bg-slate-800/80" />
          <div className="h-28 animate-pulse rounded bg-slate-800/80" />
          <div className="h-28 animate-pulse rounded bg-slate-800/80" />
        </div>
      </Card>
    </div>
  );
};

export default BriefingSkeleton;


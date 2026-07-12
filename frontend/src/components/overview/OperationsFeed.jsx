import Card from "../ui/Card";

const severityClasses = {
  High: "bg-red-500/20 text-red-300",
  Medium: "bg-yellow-500/20 text-yellow-300",
  Info: "bg-cyan-500/20 text-cyan-300",
  Normal: "bg-emerald-500/20 text-emerald-300",
  Resolved: "bg-blue-500/20 text-blue-300",
};

const OperationsFeed = ({ analysis }) => {
  const operations = analysis?.timeline ?? [];
  const hasRealTimeline = Array.isArray(operations) && operations.length > 0;

  return (
    <Card>
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-white">Operations Timeline</h2>
          <p className="mt-1 text-sm text-slate-400">
            Recent operational events across the stadium
          </p>
        </div>
        <div className="rounded-full bg-cyan-500/10 px-3 py-2 text-sm font-medium text-cyan-400">
          Live Feed
        </div>
      </div>

      {/* Timeline */}
      <div className="max-h-130 space-y-5 overflow-y-auto pr-2">
        {hasRealTimeline ? (
          operations.map((event, idx) => {
            const Icon = event.icon;

            return (
              <div key={event.id ?? idx} className="relative flex gap-5">
                {/* Timeline Line */}
                <div className="flex flex-col items-center">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      event.bg ?? "bg-slate-500/10"
                    }`}
                  >
                    {Icon ? (
                      <Icon
                        className={event.color ?? "text-cyan-400"}
                        size={18}
                      />
                    ) : (
                      <span className="text-xs text-slate-400">•</span>
                    )}
                  </div>

                  {idx !== operations.length - 1 && (
                    <div className="mt-2 h-16 w-px bg-slate-700" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 rounded-2xl border border-slate-800 bg-slate-950 p-5 transition hover:border-cyan-500/30">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div>
                      <h3 className="font-semibold text-white">{event.title}</h3>
                      <p className="mt-2 text-sm text-slate-400">{event.description}</p>
                    </div>

                    <div className="text-right">
                      <div className="font-semibold text-cyan-400">{event.time}</div>
                      <span
                        className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${
                          severityClasses[event.severity] ?? "bg-slate-500/20 text-slate-300"
                        }`}
                      >
                        {event.severity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="rounded-xl border border-slate-800 bg-slate-950 p-6 text-center text-slate-400">
            No live events yet. Generate a scenario to populate the operations timeline.
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 rounded-xl border border-slate-800 bg-slate-950 p-4">
        <div className="flex items-center justify-between">
          <span className="text-sm text-slate-400">Events Recorded</span>
          <span className="font-bold text-white">{operations.length}</span>
        </div>
      </div>
    </Card>
  );
};

export default OperationsFeed;


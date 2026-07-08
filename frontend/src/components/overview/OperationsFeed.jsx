import Card from "../ui/Card";

const events = [
  {
    title: "North Gate crowd increasing",
    time: "1 min ago",
  },
  {
    title: "Metro delay reported",
    time: "5 mins ago",
  },
  {
    title: "AI briefing generated",
    time: "8 mins ago",
  },
  {
    title: "Volunteer team deployed",
    time: "12 mins ago",
  },
];

const OperationsFeed = () => {
  return (
    <Card>

      <h3 className="text-lg font-semibold text-white">
        Operations Feed
      </h3>

      <div className="mt-6 space-y-5">

        {events.map((event) => (
          <div
            key={event.title}
            className="border-l-2 border-cyan-500 pl-4"
          >
            <p className="font-medium text-white">
              {event.title}
            </p>

            <span className="text-sm text-slate-400">
              {event.time}
            </span>
          </div>
        ))}

      </div>

    </Card>
  );
};

export default OperationsFeed;
import Card from "../ui/Card";

const TransportationCard = () => {
  return (
    <Card>

      <h2 className="text-xl font-bold text-white">
        Transportation
      </h2>

      <div className="mt-5 space-y-5">

        <div>
          <p className="text-slate-400">Metro</p>
          <p className="text-amber-400">Minor Delay</p>
        </div>

        <div>
          <p className="text-slate-400">Shuttle</p>
          <p className="text-emerald-400">Available Every 5 min</p>
        </div>

        <div>
          <p className="text-slate-400">Parking</p>
          <p className="text-red-400">85% Occupied</p>
        </div>

      </div>

    </Card>
  );
};

export default TransportationCard;
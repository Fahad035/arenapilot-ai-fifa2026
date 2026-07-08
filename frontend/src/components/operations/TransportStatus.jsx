import Card from "../ui/Card";

const TransportStatus = () => (
<Card>

<h2 className="text-xl font-bold text-white">
Transport Status
</h2>

<div className="mt-6 space-y-5">

<div>

<p className="text-slate-400">
Metro
</p>

<p className="text-yellow-400">
Minor Delay
</p>

</div>

<div>

<p className="text-slate-400">
Shuttle
</p>

<p className="text-green-400">
Running Every 5 Minutes
</p>

</div>

<div>

<p className="text-slate-400">
Parking
</p>

<p className="text-red-400">
88% Occupied
</p>

</div>

</div>

</Card>
);

export default TransportStatus;
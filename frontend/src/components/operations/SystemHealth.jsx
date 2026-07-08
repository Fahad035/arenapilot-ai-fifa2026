import Card from "../ui/Card";

const items = [
  ["Gemini AI","Online"],
  ["Crowd Engine","Healthy"],
  ["Route Engine","Healthy"],
  ["Transport Feed","Connected"],
  ["Accessibility Engine","Healthy"],
];

const SystemHealth = () => (
<Card>

<h2 className="text-xl font-bold text-white">
System Health
</h2>

<div className="mt-6 space-y-5">

{items.map(([name,status])=>(
<div
key={name}
className="flex justify-between"
>

<span>{name}</span>

<span className="text-green-400">
{status}
</span>

</div>
))}

</div>

</Card>
);

export default SystemHealth;
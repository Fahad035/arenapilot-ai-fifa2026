import Card from "../ui/Card";

const events = [
["09:00","Gates Open"],
["09:30","Security Check Complete"],
["10:05","Crowd Peak at Gate C"],
["10:15","Volunteers Deployed"],
["10:30","Traffic Normalized"],
];

const EventTimeline=()=>{

return(

<Card>

<h2 className="text-xl font-bold text-white">
Event Timeline
</h2>

<div className="mt-6 space-y-5">

{events.map(([time,event])=>(

<div
key={time}
className="border-l-2 border-cyan-500 pl-4"
>

<p className="font-semibold">
{time}
</p>

<p className="text-slate-400">
{event}
</p>

</div>

))}

</div>

</Card>

)

}

export default EventTimeline;
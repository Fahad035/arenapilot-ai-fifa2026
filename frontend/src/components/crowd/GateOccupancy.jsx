import Card from "../ui/Card";

const gates = [
  ["Gate A",82],
  ["Gate B",61],
  ["Gate C",95],
  ["Gate D",44],
];

const GateOccupancy=()=>{

return(

<Card>

<h3 className="text-xl font-bold text-white">
Gate Occupancy
</h3>

<div className="mt-6 space-y-5">

{gates.map(([gate,value])=>(

<div key={gate}>

<div className="mb-2 flex justify-between">

<span className="text-slate-300">
{gate}
</span>

<span className="font-semibold text-white">
{value}%
</span>

</div>

<div className="h-3 rounded-full bg-slate-800">

<div
style={{width:`${value}%`}}
className="h-3 rounded-full bg-blue-500"
/>

</div>

</div>

))}

</div>

</Card>

)

}

export default GateOccupancy;
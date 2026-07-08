import Card from "../ui/Card";

const staff = [
  ["Security",42],
  ["Medical",18],
  ["Volunteers",55],
  ["Transport",21],
];

const StaffDeployment=()=>{

return(

<Card>

<h2 className="text-xl font-bold text-white">
Staff Deployment
</h2>

<div className="mt-6 space-y-5">

{staff.map(([name,count])=>(

<div
key={name}
className="flex justify-between"
>

<span>{name}</span>

<strong>{count}</strong>

</div>

))}

</div>

</Card>

)

}

export default StaffDeployment;
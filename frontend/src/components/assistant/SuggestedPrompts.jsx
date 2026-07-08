import Card from "../ui/Card";

const prompts = [

"How can we reduce congestion at Gate C?",

"Generate an emergency evacuation summary.",

"Recommend a step-free route.",

"Translate announcement into Spanish.",

"Suggest transport alternatives.",

];

const SuggestedPrompts = () => {

return(

<Card>

<h2 className="text-xl font-bold text-white">
Suggested Prompts
</h2>

<div className="mt-5 space-y-3">

{prompts.map(prompt=>(

<button
key={prompt}
className="w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-left hover:border-cyan-500"
>

{prompt}

</button>

))}

</div>

</Card>

)

}

export default SuggestedPrompts;
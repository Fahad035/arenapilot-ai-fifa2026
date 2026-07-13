import Card from "../ui/Card";

const LanguageSelector = () => (
<Card>

<h2 className="text-xl font-bold text-white">
Language
</h2>

<select className="mt-5 w-full rounded-xl border border-slate-700 bg-slate-900 p-3">

<option>English</option>

<option>Spanish</option>

<option>French</option>

</select>

</Card>
);

export default LanguageSelector;
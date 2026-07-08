import Card from "../ui/Card";

const ThemeSelector = () => (
<Card>

<h2 className="text-xl font-bold text-white">
Appearance
</h2>

<div className="mt-5 space-y-3">

<label className="flex justify-between">
<span>Dark Theme</span>
<input type="checkbox" defaultChecked />
</label>

<label className="flex justify-between">
<span>Glass Effect</span>
<input type="checkbox" defaultChecked />
</label>

</div>

</Card>
);

export default ThemeSelector;
import Card from "../ui/Card";

const AccessibilitySettings = () => (
<Card>

<h2 className="text-xl font-bold text-white">
Accessibility
</h2>

<div className="mt-5 space-y-4">

<label className="flex justify-between">
<span>High Contrast</span>
<input type="checkbox" />
</label>

<label className="flex justify-between">
<span>Large Text</span>
<input type="checkbox" />
</label>

<label className="flex justify-between">
<span>Keyboard Navigation</span>
<input type="checkbox" defaultChecked />
</label>

</div>

</Card>
);

export default AccessibilitySettings;
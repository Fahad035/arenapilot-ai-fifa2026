import Card from "../ui/Card";

const NotificationSettings = () => (
<Card>

<h2 className="text-xl font-bold text-white">
Notifications
</h2>

<div className="mt-5 space-y-4">

<label className="flex justify-between">
<span>Critical Alerts</span>
<input type="checkbox" defaultChecked />
</label>

<label className="flex justify-between">
<span>Transport Updates</span>
<input type="checkbox" defaultChecked />
</label>

<label className="flex justify-between">
<span>AI Reports</span>
<input type="checkbox" defaultChecked />
</label>

</div>

</Card>
);

export default NotificationSettings;
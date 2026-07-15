import Card from "../ui/Card";
import Button from "../ui/Button";

const AnnouncementGenerator = () => (
<Card>

<h2 className="text-xl font-bold text-white">
AI Announcement
</h2>

<textarea
rows="8"
readOnly
className="mt-5 w-full rounded-xl border border-slate-700 bg-slate-900 p-4 text-slate-300"
value={`Attention supporters.

Please proceed to Gate D to avoid congestion near Gate C.

Thank you for your cooperation.`}
/>

<Button aria-label="Generate Announcement" className="mt-5 w-full">
Generate Announcement
</Button>

</Card>
);

export default AnnouncementGenerator;
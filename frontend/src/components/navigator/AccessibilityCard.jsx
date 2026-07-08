import Card from "../ui/Card";

const AccessibilityCard = () => {
  return (
    <Card>

      <h2 className="text-xl font-bold text-white">
        Accessibility
      </h2>

      <ul className="mt-5 space-y-4 text-slate-300">

        <li>✓ Step-free entrance available</li>

        <li>✓ Elevator operating normally</li>

        <li>✓ Accessible restroom nearby</li>

        <li>✓ Reserved seating assistance available</li>

      </ul>

    </Card>
  );
};

export default AccessibilityCard;
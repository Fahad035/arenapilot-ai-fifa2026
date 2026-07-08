import Card from "../ui/Card";
import Button from "../ui/Button";

const NextActions = () => {
  return (
    <Card>

      <h3 className="text-xl font-bold text-white">
        Suggested Next Actions
      </h3>

      <div className="mt-6 flex flex-wrap gap-4">

        <Button variant="secondary">
          Recalculate Risk
        </Button>

        <Button variant="secondary">
          Notify Security
        </Button>

        <Button variant="secondary">
          Save Report
        </Button>

      </div>

    </Card>
  );
};

export default NextActions;
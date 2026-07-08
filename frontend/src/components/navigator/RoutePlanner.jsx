import Card from "../ui/Card";
import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

const RoutePlanner = () => {
  return (
    <Card>

      <h2 className="text-xl font-bold text-white">
        Route Planner
      </h2>

      <div className="mt-6 space-y-5">

        <Input
          label="Current Location"
          placeholder="North Entrance"
        />

        <Input
          label="Destination"
          placeholder="Section B Seat 204"
        />

        <Select
          label="Travel Mode"
          options={[
            "Walking",
            "Wheelchair",
            "Shuttle",
            "VIP",
          ]}
        />

        <Button className="w-full">
          Generate Route
        </Button>

      </div>

    </Card>
  );
};

export default RoutePlanner;
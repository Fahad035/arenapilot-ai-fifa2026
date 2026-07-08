import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";

const HistoryFilters = () => {
  return (
    <div className="flex flex-wrap gap-4">

      <Input
        placeholder="Search analysis..."
        className="w-72"
      />

      <Select
        options={[
          "All Risks",
          "Low",
          "Medium",
          "High",
          "Critical",
        ]}
      />

      <Button>
        Export Report
      </Button>

    </div>
  );
};

export default HistoryFilters;
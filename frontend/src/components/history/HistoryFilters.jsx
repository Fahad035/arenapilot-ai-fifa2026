import Input from "../ui/Input";
import Select from "../ui/Select";
import Button from "../ui/Button";
import Card from "../ui/Card";

const HistoryFilters = () => {
  return (
    <Card className="p-4 md:p-6">
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2 md:max-w-105">
          <h3 className="text-sm font-semibold text-slate-200">
            Filters
          </h3>
          <Input
            placeholder="Search analysis..."
            className="w-full md:w-72"
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-end">
          <div className="min-w-45">
            <Select
              options={[
                "All Risks",
                "Low",
                "Moderate",
                "High",
                "Critical",
              ]}
              className="w-full"
            />
          </div>

          <Button className="w-full sm:w-auto">
            Export Report
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default HistoryFilters;

import Card from "../ui/Card";

const EmptyHistory = () => {
  return (
    <Card>

      <div className="py-20 text-center">

        <h2 className="text-2xl font-bold text-white">
          No Analysis Available
        </h2>

        <p className="mt-3 text-slate-400">

          Generate your first AI stadium analysis to
          build your history.

        </p>

      </div>

    </Card>
  );
};

export default EmptyHistory;
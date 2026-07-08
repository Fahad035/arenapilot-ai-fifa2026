import RoutePlanner from "../navigator/RoutePlanner";

const NavigatorTab = () => {
  return (
    <div className="space-y-8">

      <div>

        <h2 className="text-3xl font-bold text-white">
          Smart Navigation
        </h2>

        <p className="mt-2 text-slate-400">
          Generate intelligent routes that consider accessibility,
          transportation options and sustainability to improve movement
          throughout the stadium.
        </p>

      </div>

      <RoutePlanner />

    </div>
  );
};

export default NavigatorTab;
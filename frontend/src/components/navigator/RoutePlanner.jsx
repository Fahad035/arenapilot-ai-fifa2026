import RoutePlannerHeader from "./RoutePlannerHeader";
import RouteForm from "./RouteForm";
import RouteResultCard from "./RouteResultCard";
import useRouteAnalysis from "./useRouteAnalysis";

const RoutePlanner = ({ analysis }) => {
  const {
    recommendedGate,
    estimatedTime,
    distance,
    congestion,
    alternativeRoutes,
    navigationSteps,
    checkpoints,
    evacuationPlan,
    routeOptions,
    destinationOptions,
    generateRoute,
  } = useRouteAnalysis(analysis);

  return (
    <div className="space-y-8">
      <RoutePlannerHeader />

      <div className="grid gap-8 lg:grid-cols-3">
        <RouteForm
          routeOptions={routeOptions}
          destinationOptions={destinationOptions}
          onGenerate={generateRoute}
        />

        <div className="lg:col-span-2">
          <RouteResultCard
            recommendedGate={recommendedGate}
            estimatedTime={estimatedTime}
            distance={distance}
            congestion={congestion}
            navigationSteps={navigationSteps}
            checkpoints={checkpoints}
            alternativeRoutes={alternativeRoutes}
            evacuationPlan={evacuationPlan}
          />
        </div>
      </div>
    </div>
  );
};

export default RoutePlanner;

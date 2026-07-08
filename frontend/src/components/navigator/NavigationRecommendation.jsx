import Card from "../ui/Card";

const NavigationRecommendation = () => {
  return (
    <Card>

      <h2 className="text-xl font-bold text-white">
        AI Navigation Recommendation
      </h2>

      <div className="mt-5 rounded-xl bg-slate-800 p-5 text-slate-300 leading-8">

        Based on current crowd density, ArenaPilot recommends
        entering through Gate D. This route minimizes walking
        time, avoids congestion near Gate C, and provides a
        fully accessible path with elevator access.

      </div>

    </Card>
  );
};

export default NavigationRecommendation;
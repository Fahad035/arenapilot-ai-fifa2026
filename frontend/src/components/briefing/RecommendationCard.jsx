import {
  FaCircleCheck,
  FaArrowRight,
  FaTriangleExclamation,
} from "react-icons/fa6";

import Card from "../ui/Card";

const RecommendationCard = ({ analysis }) => {
  const recommendations =
    analysis?.recommendations || [
      "Open Gate D to reduce congestion.",
      "Deploy additional crowd marshals.",
      "Increase public announcements.",
      "Monitor medical response teams.",
    ];

  return (
    <Card>

      <div className="mb-6 flex items-center gap-3">

        <FaCircleCheck
          className="text-emerald-400"
          size={22}
        />

        <h2 className="text-2xl font-bold text-white">
          Priority Actions
        </h2>

      </div>

      <div className="space-y-4">

        {recommendations.map((item, index) => (

          <div
            key={index}
            className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-5 transition hover:border-emerald-400"
          >

            <div className="flex items-start gap-4">

              <div className="mt-1">

                {index === 0 ? (
                  <FaTriangleExclamation className="text-red-400" />
                ) : (
                  <FaArrowRight className="text-emerald-400" />
                )}

              </div>

              <div>

                <h3 className="font-semibold text-white">
                  Priority {index + 1}
                </h3>

                <p className="mt-2 leading-7 text-slate-300">
                  {item}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </Card>
  );
};

export default RecommendationCard;
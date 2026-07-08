import { FaRobot } from "react-icons/fa";

const EmptyState = ({
  title,
  description,
}) => {
  return (
    <div className="rounded-2xl border border-dashed border-slate-700 bg-slate-900 p-12 text-center">

      <FaRobot className="mx-auto text-5xl text-slate-500" />

      <h2 className="mt-6 text-2xl font-bold text-white">
        {title}
      </h2>

      <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">
        {description}
      </p>

    </div>
  );
};

export default EmptyState;
import { memo } from "react";
import { FaCircle, FaMapMarkerAlt } from "react-icons/fa";

const HeaderStatus = memo(function HeaderStatus() {
  return (
    <div className="mt-5 flex flex-wrap items-center gap-3">
      <div className="flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
        <FaMapMarkerAlt />
        Lusail Stadium
      </div>

      <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
        <FaCircle className="animate-pulse text-[10px]" />
        Live Operations
      </div>
    </div>
  );
});

export default HeaderStatus;

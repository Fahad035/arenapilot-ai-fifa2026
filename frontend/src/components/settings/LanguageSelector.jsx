import { useEffect } from "react";

import Card from "../ui/Card";

const LanguageSelector = ({
  value,
  onChange,
}) => {
  useEffect(() => {
    // no-op (kept for future)
  }, []);

  return (
    <Card>
      <h2 className="text-xl font-bold text-white">
        Language
      </h2>

      <select
        className="mt-5 w-full rounded-xl border border-slate-700 bg-slate-900 p-3"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option>English</option>
        <option>Spanish</option>
        <option>French</option>
      </select>
    </Card>
  );
};

export default LanguageSelector;

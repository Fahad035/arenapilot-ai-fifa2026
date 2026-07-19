import { memo } from "react";

const SelectField = memo(function SelectField({
  field,
  label,
  icon: Icon,
  value,
  options,
  placeholder,
  error,
  onChange,
}) {
  const handleSelectChange = (e) => onChange(field, e.target.value);

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-300">
        {label}
      </label>

      {Icon ? (
        <div className="relative">
          <Icon className="absolute left-4 top-4 text-slate-500" />

          <select
            value={value || ""}
            onChange={handleSelectChange}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3 pl-11 pr-4 text-white outline-none transition focus:border-cyan-500"
          >
            <option value="">{placeholder}</option>

            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <select
          value={value || ""}
          onChange={handleSelectChange}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-500"
        >
          <option value="">{placeholder}</option>

          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )}

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </div>
  );
});

export default SelectField;

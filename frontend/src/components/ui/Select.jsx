const Select = ({
  label,
  options = [],
  className = "",
  ...props
}) => {
  return (
    <div>

      {label && (
        <label
          className="mb-2 block text-sm font-medium"
          style={{ color: "var(--muted)" }}
        >
          {label}
        </label>
      )}

      <select
        {...props}
        className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-500 ${className}`}
        style={{
          borderColor: "var(--input-border)",
          background: "var(--input-bg)",
          color: "var(--fg)",
        }}
      >
        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>

    </div>
  );
};

export default Select;
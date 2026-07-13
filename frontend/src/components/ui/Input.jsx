const Input = ({
  label,
  error,
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

      <input
        {...props}
        className={`w-full rounded-xl border px-4 py-3 outline-none transition focus:border-blue-500 ${className}`}
        style={{
          borderColor: "var(--input-border)",
          background: "var(--input-bg)",
          color: "var(--fg)",
        }}
      />

      {error && (
        <p className="mt-2 text-sm" style={{ color: "var(--danger-fg)" }}>
          {error}
        </p>
      )}

    </div>
  );
};

export default Input;
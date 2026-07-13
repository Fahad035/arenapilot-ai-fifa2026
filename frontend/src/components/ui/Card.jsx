const Card = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-2xl border p-6 shadow-lg ${className}`}
      style={{
        borderColor: "var(--card-border)",
        background: "var(--card-bg)",
        color: "var(--fg)",
      }}
    >
      {children}
    </div>
  );
};

export default Card;

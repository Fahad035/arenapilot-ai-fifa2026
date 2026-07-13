import clsx from "clsx";

const variants = {
  primary:
    "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90",

  secondary:
    "bg-[var(--button-bg)] text-[var(--button-fg)] hover:bg-[var(--button-hover-bg)]",

  danger:
    "bg-[var(--danger-bg)] text-[var(--danger-fg)] hover:bg-[var(--danger-hover-bg)]",

  outline:
    "border border-[var(--button-border)] text-[var(--button-fg)] hover:bg-[var(--button-hover-bg)]",
};

const Button = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  return (
    <button
      {...props}
      className={clsx(
        "rounded-xl px-5 py-3 font-semibold transition duration-200 disabled:opacity-50",
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
import clsx from "clsx";

const variants = {
  primary:
    "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:opacity-90",

  secondary:
    "bg-slate-800 text-white hover:bg-slate-700",

  danger:
    "bg-red-600 text-white hover:bg-red-700",

  outline:
    "border border-slate-700 text-white hover:bg-slate-800",
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
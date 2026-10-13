const Button = ({
  children,
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  type = "button",
  onClick,
  className = "",
  ...props
}) => {
  // 1. Shared styles: common to every button
  const base =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  // 2. Variant styles: visual appearance
  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 disabled:hover:bg-blue-600",
    secondary:
      "bg-gray-200 text-gray-900 hover:bg-gray-300 disabled:hover:bg-gray-200",
    ghost:
      "bg-transparent text-gray-800 hover:bg-gray-100 disabled:hover:bg-transparent",
    danger: "bg-red-600 text-white hover:bg-red-700 disabled:hover:bg-red-600",
    outlined:
      "border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50 disabled:hover:bg-transparent",
  };

  // 3. Size styles: dimensions and typography
  const sizes = {
    xs: "px-2 py-1 text-xs",
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  // 4. State: loading also disables interaction
  const isDisabled = loading || disabled;

  const buttonClasses = [
    base,
    styles[variant] ?? styles.primary,
    sizes[size] ?? sizes.md,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      {...props}
      type={type}
      className={buttonClasses}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onClick={onClick}
    >
      {loading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      )}

      {children}
    </button>
  );
};

export default Button;

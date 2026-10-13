import { Check, Info, TriangleAlert, X } from "lucide-react";

const ToastBadge = ({ type = "error", title, message, onClose }) => {
  const variants = {
    success: "border-green-200 bg-green-50 text-green-800",
    info: "border-blue-200 bg-blue-50 text-blue-800",
    warning: "border-yellow-200 bg-yellow-50 text-yellow-800",
    error: "border-red-200 bg-red-50 text-red-800",
  };

  const icons = {
    success: <Check size={18} />,
    info: <Info size={18} />,
    warning: <TriangleAlert size={18} />,
    error: <X size={18} />,
  };

  const variantClass = variants[type] ?? variants.success;
  const icon = icons[type] ?? icons.error;

  return (
    <div
      role={type === "error" ? "alert" : "status"}
      className={`flex w-full max-w-md items-start justify-between gap-4 rounded-xl border p-4 ${variantClass}`}
    >
      <div className="flex min-w-0 items-start gap-3">
        <span className="mt-0.5 shrink-0">{icon}</span>

        <div className="min-w-0">
          {title && <h3 className="text-sm font-semibold">{title}</h3>}

          {message && <p className="mt-1 text-sm">{message}</p>}
        </div>
      </div>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Close notification"
          className="shrink-0 rounded-md p-1 transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
};

export default ToastBadge;

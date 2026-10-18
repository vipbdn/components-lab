const Radio = ({
  id,
  name,
  value,
  checked,
  onChange,
  label,
  disabled = false,
  required = false,
  describedBy,
}) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        required={required}
        aria-describedby={describedBy}
        className="h-4 w-4 accent-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed"
      />

      <label
        htmlFor={id}
        className={`text-sm ${
          disabled
            ? "cursor-not-allowed text-gray-400"
            : "cursor-pointer text-gray-700"
        }`}
      >
        {label}
      </label>
    </div>
  );
};

export default Radio;

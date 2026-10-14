import InputWrapper from "./InputWrapper";

const TextInput = ({
  id,
  name,
  label,
  type = "text",
  value,
  defaultValue,
  placeholder,
  onChange,
  error,
  helperText,
  required = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const inputId = id || name;
  const isInvalid = Boolean(error);
  const messageId = `${inputId}-message`;

  // This component supports text and email only.
  const inputType = ["text", "email"].includes(type) ? type : "text";

  const inputClasses = [
    "w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-900",
    "placeholder:text-gray-400",
    "transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-1",
    "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500",
    isInvalid ? "border-red-500 focus-visible:ring-red-500" : "border-gray-300",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <InputWrapper
      id={inputId}
      label={label}
      error={error}
      helperText={helperText}
      required={required}
    >
      <input
        {...props}
        id={inputId}
        name={name}
        type={inputType}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        disabled={disabled}
        aria-invalid={isInvalid || undefined}
        aria-describedby={error || helperText ? messageId : undefined}
        className={inputClasses}
      />
    </InputWrapper>
  );
};

export default TextInput;

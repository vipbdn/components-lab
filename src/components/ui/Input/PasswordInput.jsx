import { useState } from "react";
import InputWrapper from "./InputWrapper";
import { Eye, EyeClosed } from "lucide-react";

const PasswordInput = ({
  id,
  name,
  label,
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

  const [show, setShow] = useState(false);

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
      <div className="relative">
        <input
          {...props}
          id={inputId}
          name={name}
          type={show ? "text" : "password"}
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
        <button
          type="button"
          onClick={() => setShow((prev) => !prev)}
          aria-label={show ? "Hide password" : "Show password"}
          aria-pressed={show}
          disabled={disabled}
          className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
        >
          {show ? <Eye size={18} /> : <EyeClosed size={18} />}
        </button>
      </div>
    </InputWrapper>
  );
};

export default PasswordInput;

import React from "react";
import InputWrapper from "./InputWrapper";

const TextArea = ({
  id,
  label,
  value,
  name,
  error,
  helperText,
  required = false,
  disabled = false,
  onChange,
  rows = 5,
  cols = 5,
  placeholder,
  className = "",
}) => {
  const inputId = id || name;
  const isInvalid = Boolean(error);
  const messageId = `${inputId}-message`;

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
      <textarea
        id={inputId}
        name={name}
        rows={rows}
        cols={cols}
        placeholder={placeholder}
        onChange={onChange}
        className={inputClasses}
        value={value}
        disabled={disabled}
        aria-invalid={isInvalid || undefined}
        aria-describedby={error || helperText ? messageId : undefined}
      />
    </InputWrapper>
  );
};

export default TextArea;

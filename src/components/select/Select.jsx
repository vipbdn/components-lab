import React from "react";
import InputWrapper from "../ui/Input/InputWrapper";

const Select = ({
  id,
  label,
  value,
  onChange,
  name,
  placeholder = "Select city",
  options = [],
  error,
  helperText,
  required = false,
  disabled = false,
  className = "",
}) => {
  const inputId = id || name;
  const isInvalid = Boolean(error);
  const messageId = `${inputId}-message`;

  const selectClasses = [
    "w-full rounded-md border bg-white px-3 py-2 text-sm text-gray-900",
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
      <select
        id={inputId}
        name={name}
        value={value ?? ""}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={selectClasses}
        aria-invalid={isInvalid || undefined}
        aria-describedby={error || helperText ? messageId : undefined}
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </InputWrapper>
  );
};

export default Select;

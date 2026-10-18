import InputWrapper from "./InputWrapper";
import Radio from "./Radio";

const RadioGroup = ({
  id,
  name,
  label,
  options = [],
  value,
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
  const describedBy = error || helperText ? messageId : undefined;

  return (
    <InputWrapper
      id={inputId}
      label={label}
      error={error}
      helperText={helperText}
      required={required}
    >
      <fieldset
        disabled={disabled}
        aria-describedby={describedBy}
        aria-invalid={isInvalid || undefined}
        className={`flex flex-col gap-2 ${className}`}
      >
        <legend className="sr-only">{label}</legend>

        {options.map((option) => {
          const optionId = `${inputId}-${option.value}`;

          return (
            <Radio
              key={option.value}
              id={optionId}
              name={name}
              value={option.value}
              label={option.label}
              checked={value === option.value}
              onChange={onChange}
              disabled={disabled || option.disabled}
              required={required}
              describedBy={describedBy}
              {...props}
            />
          );
        })}
      </fieldset>
    </InputWrapper>
  );
};

export default RadioGroup;

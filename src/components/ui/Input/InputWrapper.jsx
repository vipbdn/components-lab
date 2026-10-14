const InputWrapper = ({
  id,
  label,
  error,
  helperText,
  required = false,
  children,
}) => {
  const messageId = `${id}-message`;

  return (
    <div className="flex w-full flex-col gap-1.5">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
          {required && (
            <span className="ml-1 text-red-500" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      {children}

      {error ? (
        <p id={messageId} className="text-xs text-red-600">
          {error}
        </p>
      ) : helperText ? (
        <p id={messageId} className="text-xs text-gray-500">
          {helperText}
        </p>
      ) : null}
    </div>
  );
};

export default InputWrapper;

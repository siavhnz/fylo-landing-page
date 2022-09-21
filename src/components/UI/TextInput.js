import { forwardRef } from "react";

/**
 *  To use this component you must provide
 *  ref, validity, and input properties
 *  For example:
 * <TextInput
        ref={textInput}
        validity={{hasError: false, errorMessage: "",}} // read from state
        input={{ type: "text", placeholder: "Enter your email..." }}
    />
 * 
 */

const TextInput = forwardRef((props, ref) => {
  const { hasError, errorMessage } = { ...props.validity };
  let input = { ...props.input };

  let error,
    inputClasses = "";

  if (hasError) {
    // Show border red on error
    inputClasses = "";

    //Error message
    error = <span>{errorMessage}</span>;
  }

  input = { ...input, className: inputClasses };

  return (
    <div>
      <input {...input} ref={ref} />
      {error}
    </div>
  );
});

export default TextInput;

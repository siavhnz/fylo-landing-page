import { forwardRef } from "react";
import styleUtils from "./TextInput.module.css";

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
  const errorTheme = props.errorTheme;
  let input = { ...props.input };

  let error,
    inputClasses = styleUtils["text-input"];

  if (hasError) {
    // Show border red on error
    inputClasses = `${styleUtils["text-input"]} ${styleUtils["border-red"]}`;

    //Error message
    error = (
      <span
        className={`${
          errorTheme === "white"
            ? styleUtils["error-white"]
            : styleUtils["error-red"]
        }`}
      >
        {errorMessage}
      </span>
    );
  }

  input = { ...input, className: inputClasses };

  return (
    <div className={props.textClass}>
      <input {...input} ref={ref} />
      {error}
    </div>
  );
});

export default TextInput;

import { useRef, useState } from "react";
import Button from "./UI/Button";
import TextInput from "./UI/TextInput";

const FastSignup = (props) => {
  const { btnText, inputPlaceholder } = { ...props };
  const textInput = useRef();
  const [error, setError] = useState({
    hasError: false,
    errorMessage: "",
  });

  const handleClick = (event) => {
    event.preventDefault();

    textInput.current.value;

    const isEmailValid = validateEmail(textInput.current.value);
    if (isEmailValid) {
      setError({
        hasError: false,
        errorMessage: "",
      });
    } else {
      setError({
        hasError: true,
        errorMessage: "Please check your email",
      });
    }
  };

  const validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <form className={props.formClass} onSubmit={handleClick}>
      <TextInput
        ref={textInput}
        errorTheme={props.errorTheme}
        validity={error}
        input={{ type: "text", placeholder: inputPlaceholder }}
        textClass={props.textClass}
      />
      <Button type="submit" className={props.buttonClass}>
        {btnText}
      </Button>
    </form>
  );
};

export default FastSignup;

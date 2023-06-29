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

    console.log(textInput.current.value);

    setError({
      hasError: true,
      errorMessage: "Please check your email",
    });
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

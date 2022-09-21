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
    <form onSubmit={handleClick}>
      <TextInput
        ref={textInput}
        validity={error}
        input={{ type: "text", placeholder: inputPlaceholder }}
      />
      <Button type="submit">{btnText}</Button>
    </form>
  );
};

export default FastSignup;

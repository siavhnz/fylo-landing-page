import styleUtils from "./Button.module.css";

const Button = (props) => {
  const classes = props.className
    ? `${styleUtils.button} ${props.className}`
    : styleUtils.button;
  return (
    <button {...props} className={classes}>
      {props.children}
    </button>
  );
};

export default Button;

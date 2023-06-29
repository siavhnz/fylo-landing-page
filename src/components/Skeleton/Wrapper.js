import styleUtils from "./Wrapper.module.css";

const Wrapper = (props) => {
  const classes = props.className
    ? `${styleUtils.wrapper} ${props.className}`
    : styleUtils.wrapper;
  return <div className={classes}>{props.children}</div>;
};

export default Wrapper;

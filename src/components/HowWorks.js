import Wrapper from "./Skeleton/Wrapper";
import { ReactComponent as Illustration } from "../images/illustration-2.svg";
import Testimonial from "./Testimonial";
import styleUtils from "./HowWorks.module.css";
const HowWorks = () => {
  return (
    <div>
      <Wrapper>
        <Illustration focusable="false" aria-hidden="true" />
        <h2>All your files in one secure location, accessible anywhere.</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <div>
          <a href="./" className={styleUtils["arrow-icon"]}>
            See How Fylo workers
          </a>
        </div>
        <Testimonial />
      </Wrapper>
    </div>
  );
};

export default HowWorks;

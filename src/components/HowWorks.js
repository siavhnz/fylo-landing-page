import Wrapper from "./Skeleton/Wrapper";
import Illustration from "../images/illustration-2.svg";
import styleUtils from "./HowWorks.module.css";
import Testimonial from "./Testimonial";
import { ReactComponent as ArrowIcon } from "../images/icon-arrow.svg";

const HowWorks = () => {
  return (
    <Wrapper>
      <div className={styleUtils["how-works"]}>
        <img src={Illustration} className={styleUtils.img} alt="how it works" />
        <div className={styleUtils.info}>
          <h2 className={styleUtils.title}>
            Stay productive, wherever you are
          </h2>
          <p className={styleUtils.desc}>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className={styleUtils.desc}>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required!
          </p>
          <div className={styleUtils["call-to-action-holder"]}>
            <a className={styleUtils["call-to-action"]} href="/">
              <span href="./">See How Fylo works</span>
              <ArrowIcon focusable="false" aria-hidden="true" className={styleUtils["arrow-icon"]} />
            </a>
          </div>
          <Testimonial />
        </div>
      </div>
    </Wrapper>
  );
};

export default HowWorks;

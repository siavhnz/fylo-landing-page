import { ReactComponent as QuoteIcon } from "../images/icon-quotes.svg";
import Avatar from "../images/avatar-testimonial.jpg";
import styleUtils from "./Testimonial.module.css";
const Testimonial = () => {
  return (
    <blockquote className={styleUtils.blockquote}>
      <QuoteIcon focusable="false" aria-hidden="true" />
      <p className={styleUtils.quote}>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div className={styleUtils.footer}>
        <img src={Avatar} alt="Kyle Burton" className={styleUtils.avatar} />
        <div className={styleUtils.info}>
          <span className={styleUtils.name}>Kyle Burton</span>
          <span className={styleUtils.role}>Founder & CEO, Huddle</span>
        </div>
      </div>
    </blockquote>
  );
};

export default Testimonial;

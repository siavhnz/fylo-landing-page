import { ReactComponent as QuoteIcon } from "../images/icon-quotes.svg";
import Avatar from "../images/avatar-testimonial.jpg";
const Testimonial = () => {
  return (
    <blockquote>
      <QuoteIcon focusable="false" aria-hidden="true" />
      <p>
        Fylo has improved our team productivity by an order of magnitude. Since
        making the switch our team has become a well-oiled collaboration
        machine.
      </p>
      <div>
        <img src={Avatar} alt="Kyle Burton" />
        <div>
          <span>Kyle Burton</span>
          <span>Founder & CEO, Huddle</span>
        </div>
      </div>
    </blockquote>
  );
};

export default Testimonial;

import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as PhoneIcon } from "../../images/icon-phone.svg";
import { ReactComponent as EmailIcon } from "../../images/icon-email.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";
const Footer = () => {
  return (
    <footer>
      <div>
        <Logo title="logo" focusable="false" />
      </div>
      <div>
        <div>
          <PhoneIcon focusable="false" aria-hidden="true" />
          <span>Phone: +1-543-123-4567</span>
        </div>
        <div>
          <EmailIcon focusable="false" aria-hidden="true" />
          <span>example@fylo.com</span>
        </div>
      </div>
      <div>
        <ul>
          <li>
            <a href="./">About Us</a>
          </li>
          <li>
            <a href="./">Jobs</a>
          </li>
          <li>
            <a href="./">Press</a>
          </li>
          <li>
            <a href="./">Blog</a>
          </li>
          <li></li>
          <li>
            <a href="./">Contact Us</a>
          </li>
          <li>
            <a href="./">Terms</a>
          </li>
          <li>
            <a href="./">Privacy</a>
          </li>
        </ul>
      </div>
      <div>
        <a href="https://facebook.com" rel="noopener noreferrer">
          <FacebookIcon />
        </a>
        <a href="https://facebook.com" rel="noopener noreferrer">
          <TwitterIcon />
        </a>
        <a href="https://facebook.com" rel="noopener noreferrer">
          <InstagramIcon />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

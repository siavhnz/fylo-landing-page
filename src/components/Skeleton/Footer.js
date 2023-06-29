import { ReactComponent as Logo } from "../../images/logo-footer.svg";
import { ReactComponent as PhoneIcon } from "../../images/icon-phone.svg";
import { ReactComponent as EmailIcon } from "../../images/icon-email.svg";
import { ReactComponent as FacebookIcon } from "../../images/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../images/twitter.svg";
import { ReactComponent as InstagramIcon } from "../../images/instagram.svg";
import Wrapper from "./Wrapper";
import styleUtils from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styleUtils.footer}>
      <Wrapper>
        <div>
          <Logo title="logo" focusable="false" />
        </div>
        <div className={styleUtils.section}>
          <div className={styleUtils.first}>
            <div>
              <PhoneIcon focusable="false" aria-hidden="true" />
              <span>Phone: +1-543-123-4567</span>
            </div>
            <div>
              <EmailIcon focusable="false" aria-hidden="true" />
              <span>example@fylo.com</span>
            </div>
          </div>
          <div className={styleUtils.menu}>
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
            </ul>
          </div>
          <div className={styleUtils.menu}>
            <ul>
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
          <div className={styleUtils.last}>
            <a
              href="https://facebook.com"
              rel="noopener noreferrer"
              className={styleUtils["social-icon"]}
            >
              <FacebookIcon />
            </a>
            <a
              href="https://facebook.com"
              rel="noopener noreferrer"
              className={styleUtils["social-icon"]}
            >
              <TwitterIcon />
            </a>
            <a
              href="https://facebook.com"
              rel="noopener noreferrer"
              className={styleUtils["social-icon"]}
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;

import Wrapper from "./Wrapper";
import Logo from "../../images/logo.svg";
import MainMenu from "../MainMenu";
import styleUtils from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Wrapper className={styleUtils.header}>
        {/* it must be replace with a route Link */}
        <a href="./" aria-label="logo" className={styleUtils.logo}>
          <img alt="logo" src={Logo} />
        </a>
        <MainMenu />
      </Wrapper>
    </header>
  );
};

export default Header;

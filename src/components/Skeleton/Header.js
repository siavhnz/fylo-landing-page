import Wrapper from "./Wrapper";
import { ReactComponent as Logo } from "../../images/logo.svg";
import MainMenu from "../MainMenu";

const Header = () => {
  return (
    <header>
      <Wrapper>
        <a href="./" aria-label="logo">
          <Logo focusable="false" title="logo" />
        </a>
        <MainMenu />
      </Wrapper>
    </header>
  );
};

export default Header;

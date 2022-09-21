import Wrapper from "./Skeleton/Wrapper";
import { ReactComponent as Illustration } from "../images/illustration-1.svg";
import FastSignup from "./FastSignupForm";

const Hero = () => {
  return (
    <div>
      <Wrapper>
        <Illustration focusable="false" aria-hidden="true" />
        <h1>All your files in one secure location, accessible anywhere.</h1>
        <p>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <FastSignup
          btnText="Get Started"
          inputPlaceholder="Enter your email.."
        />
      </Wrapper>
    </div>
  );
};

export default Hero;

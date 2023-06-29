import Wrapper from "./Skeleton/Wrapper";
import Illustration from "../images/illustration-1.svg";

import FastSignup from "./FastSignupForm";
import styleUtils from "./Hero.module.css";

const Hero = () => {
  return (
    <Wrapper>
      <article className={styleUtils.hero}>
        <img src={Illustration} alt="hero" className={styleUtils["hero-img"]} />
        <div>
          <h1 className={styleUtils.title}>
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className={styleUtils.desc}>
            Fylo stores your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family,
            and co-workers.
          </p>
          <FastSignup
            btnText="Get Started"
            inputPlaceholder="Enter your email.."
            textClass={styleUtils["textfield-container"]}
            buttonClass={styleUtils["submit-btn"]}
            formClass={styleUtils["fast-form"]}
            errorTheme="red"
          />
        </div>
      </article>
    </Wrapper>
  );
};

export default Hero;

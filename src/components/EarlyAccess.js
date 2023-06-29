import Wrapper from "./Skeleton/Wrapper";
import FastSignup from "./FastSignupForm";
import styleUtils from "./EarlyAccess.module.css";

const EarlyAccess = () => {
  return (
    <div className={styleUtils.container}>
      <Wrapper className={styleUtils["fast-access"]}>
        <div className={styleUtils.info}>
          <h2 className={styleUtils.title}>Get early access today</h2>
          <p className={styleUtils.desc}>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <FastSignup
          btnText="Get Started For Free"
          inputPlaceholder="email@example.com"
          textClass={styleUtils["textfield-container"]}
          buttonClass={styleUtils["submit-btn"]}
          formClass={styleUtils["fast-form"]}
          errorTheme="white"
        />
      </Wrapper>
    </div>
  );
};

export default EarlyAccess;

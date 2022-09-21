import Wrapper from "./Skeleton/Wrapper";
import FastSignup from "./FastSignupForm";

const EarlyAccess = () => {
  return (
    <div>
      <Wrapper>
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
        <FastSignup
          btnText="Get Started For Free"
          inputPlaceholder="email@example.com"
        />
      </Wrapper>
    </div>
  );
};

export default EarlyAccess;

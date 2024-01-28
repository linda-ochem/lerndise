import getstartedImg from "../assets/getstartedImg.png";
import Pill from "./Pills/Pill";
import GetStartedButton from "./Buttons/GetStartedButton";
import RightIcon from "../assets/Right Circle 1.svg";
import HeadingAndText from "./Text/HeadingAndText";

const GetStarted = () => {
  return (
    <>
      <section className="flex gap-x-2 mb-20">
        <div className="w-1/2">
          <Pill>Empower Students, Inspire Educators</Pill>
          <HeadingAndText
            heading="Unlock Limitless"
            coloredHeading="Learning"
            heading2="Possibilities"
            text="Welcome to Learndise, where innovation meets education! Our AI-driven
        Learning Management System (LMS) is revolutionizing the way students
        learn and educators teach. Seamlessly combining cutting-edge technology
        with a user- friendly interface, we create an immersive educational
        experience tailored to individual needs."
          ></HeadingAndText>
          <div className="flex gap-x-8 items-center">
            <GetStartedButton>Get Started</GetStartedButton>
            <div className="flex gap-x-2 items-center">
              <span className="text-base/[20px] font-body font-bold text-lerndis-black-pearl">
                Contact Sales
              </span>
              <img
                className="w-[20px] h-[20px]"
                src={RightIcon}
                alt="Right Icon"
              />
            </div>
          </div>
        </div>
        <img className="w-1/2" src={getstartedImg} alt="An Illustration" />
      </section>
    </>
  );
};

export default GetStarted;

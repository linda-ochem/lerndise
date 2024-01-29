import twitter from "../assets/Twitter.svg";
import instagram from "../assets/instagram.svg";
import linkedin from "../assets/linkedin.svg";
import facebook from "../assets/facebook.svg";

const Footer = () => {
  return (
    <section className="bg-lerndis-black-pearl flex w-screen mx-auto h-[10rem]">
      <div className="w-[990px] mx-auto my-12">
        <div className="flex justify-between mb-[2.1rem]">
          <h1 className="font-display  text-xl font-bold text-lerndis-orange">
            Lerndise
          </h1>
          <div className="flex justify-center">
            <img className="ml-4" src={twitter} alt="Twitter Icon" />
            <img className="ml-4" src={instagram} alt="Instagram Icon" />
            <img className="ml-4" src={linkedin} alt="Linkedin Icon" />
            <img className="ml-4" src={facebook} alt="Facebook Icon" />
          </div>
        </div>
        <p className="text-lerndis-white flex justify-center mb-4">
          ©2024 Learndise. All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;

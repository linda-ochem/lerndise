import ContactButton from "./Buttons/ContactButton";
import contactsalesing from "../assets/contactsalesimg.png";

const ContactSales = () => {
  return (
    <>
      <section className="flex justify-center w-screen mx-auto pt-[7.5rem] pb-[8.5rem]">
        <div>
          <div className="flex">
            <h1 className="text-center font-display font-bold text-lerndis-black-pearl  text-[32px] pb-10 pt-[3.5rem]">
              Let's Shape the Future of <br />
              Education Together
            </h1>
          </div>
          <div className="flex justify-center pb-[2.8rem]">
            <ContactButton>Contact Sales</ContactButton>
          </div>
          <img className="flex justify-center" src={contactsalesing} alt="An Illustration" />
        </div>
      </section>
    </>
  );
};

export default ContactSales;

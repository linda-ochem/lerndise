import RightIcon from "../../assets/right-icon-white.svg";

interface Props {
    children: string;
}

const ContactButton = ({children}: Props) => {
  return (
    <>
      <button className="bg-lerndis-black-pearl w-[219px] py-4 px-2.5 rounded-[40px] flex justify-center gap-x-2 items-center">
        <span className="text-base/[20px] font-body font-bold text-white">
          {children}
        </span>
        <img className="w-[20px] h-[20px]" src={RightIcon} alt="Right Icon" />
      </button>
    </>
  );
};

export default ContactButton;

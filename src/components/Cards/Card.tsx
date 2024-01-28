import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <>
      <div className="relative h-full p-5">
        <div className="text-[#E6E6E6] pb-4 font-body w-[22rem]">
          {children}
        </div>
      </div>
    </>
  );
};

export default Card;

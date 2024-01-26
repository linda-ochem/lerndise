import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Card = ({ children }: Props) => {
  return (
    <div className="border border-solid border-black w-[29.125rem] rounded-t-md">
      {children}
    </div>
  );
};

export default Card;

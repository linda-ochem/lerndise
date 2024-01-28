import AiImg from "../../../assets/img-1.png";
import CollabImg from "../../../assets/img-2.png";
import EmpowerImg from "../../../assets/img-3.png";
import AdminImg from "../../../assets/img-4.png";
import GuardianImg from "../../../assets/img-5.png";
import hicon from "../../../assets/Tick Circle.png";

interface Props {
  selectedItemImage: number;
  children: string;
  list?: string[];
}

const SolutionCard = ({ selectedItemImage, children, list }: Props) => {
  return (
    <div className="text-lg/[32px] w-3/6 h-[560px] bg-lerndis-grey">
      <div className="bg-lerndis-black-pearl rounded-t-2xl w-full flex justify-center">
        {selectedItemImage == 1 ? (
          <img src={AiImg} alt="" />
        ) : selectedItemImage == 2 ? (
          <img src={CollabImg} alt="" />
        ) : selectedItemImage == 3 ? (
          <img src={EmpowerImg} alt="" />
        ) : selectedItemImage == 4 ? (
          <img src={AdminImg} alt="" />
        ) : selectedItemImage == 5 ? (
          <img src={GuardianImg} alt="" />
        ) : null}
      </div>
      <div className="p-6">
        <p className="mb-4">{children}</p>
        {list?.map((item) => (
          <div className="flex gap-x-1">
            <img className="mt-1 w-[20px] h-[20px]" src={hicon} alt="" />
            <p className="text-base/[28px] mb-4">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionCard;

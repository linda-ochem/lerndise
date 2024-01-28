import { useState } from "react";
import SolutionComposition from "./Cards/SolutionCards/SolutionComposition";
import ContactButton from "./Buttons/ContactButton";

const Solution = () => {
  const list = [
    { id: 1, text: "AI DRIVEN ENHANCED LEARNING EXPERIENCE" },
    { id: 2, text: "COLLABORATIVE LEARNING AND DEVELOPMENT" },
    { id: 3, text: "TEACHER EMPOWERMENT AND DEVELOPMENT" },
    { id: 4, text: "SCHOOL ADMINISTRATION OPTIMIZATION" },
    { id: 5, text: "GUARDIAN ENGAGEMENT" },
  ];
  const [selected, setSelected] = useState(1);
  return (
    <div className="font-body flex gap-x-7">
      <div className="w-1/2 flex flex-col justify-between">
        <ul className="p-0 list-none text-base/[28px] flex flex-col gap-y-8">
          {list.map((item) => (
            <li
              key={item.id}
              className="cursor-pointer text-[#999999] font-semibold text-base/[28px] font-body pl-0.5 border-l-4 border-[#E6E6E6] h-[56px] flex items-center"
              onClick={() => setSelected(item.id)}
            >
              {item.text}
            </li>
          ))}
        </ul>
        <ContactButton>Contact Sales</ContactButton>
      </div>
      {<SolutionComposition selectedItem={selected} />}
    </div>
  );
};

export default Solution;

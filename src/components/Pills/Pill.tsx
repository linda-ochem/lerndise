interface Props {
  children: string;
}

const Pill = ({ children }: Props) => {
  return (
    <div className="my-6">
      <span className="bg-[#E5F8FF] text-[#00A8E8] my-6 py-2.5 px-3 rounded-2xl font-body font-bold text-xs">
        {children}
      </span>
    </div>
  );
};

export default Pill;

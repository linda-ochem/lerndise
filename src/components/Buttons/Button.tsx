interface Props {
  children: string;
  width: number;
  padding?: number;
  paddingBlock?: number;
  paddingInline?: number;
  size?: string;
  color?: string;
  textColor?: string;
}

const Button = ({
  children,
  width,
  padding,
  paddingBlock,
  paddingInline,
  size,
  color,
  textColor,
}: Props) => {
  return (
    <>
      <button
        className={`text-${textColor} border border-solid border-black w-[${width}rem] p-${padding} py-[${paddingBlock}px] px-[${paddingInline}px] rounded-full text-${size} font-semibold bg-${color}`}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

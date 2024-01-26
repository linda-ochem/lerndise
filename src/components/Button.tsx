interface Props {
    children: string;
    width: number;
    padding?: number;
    size?: string;
    color?: string;
}

const Button = ({children, width, padding, size, color}: Props) => {
  return (
    <>
        <button className={`border border-solid border-black w-[${width}rem] p-${padding} rounded-full text-${size} font-semibold bg-${color}`}>{children}</button>
    </>
  )
}

export default Button
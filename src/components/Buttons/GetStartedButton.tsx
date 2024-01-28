
interface Props {
    children: string;
}

const GetStartedButton = ({children}: Props) => {
  return (
   <button className="w-[172px] px-2.5 py-[18px] font-body font-bold text-base/[20px] text-white rounded-[40px] bg-lerndis-black-pearl">{children}</button>
  )
}

export default GetStartedButton
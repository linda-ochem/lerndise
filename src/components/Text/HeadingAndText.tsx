
interface Props {
    heading: string;
    heading2?: string;
    coloredHeading: string;
    text: string;
}

const HeadingAndText = ({heading, heading2, coloredHeading, text}: Props) => {
  return (
    <>
      <h1 className="font-body text-5xl font-extrabold leading-tight">
        {heading}{" "}
        <span className="font-display font-normal text-lerndis-orange">
          {coloredHeading}
        </span>{" "}
        {heading2}
      </h1>
      <p className="font-body font-light text-lerndis-text-black text-lg/[32px] mt-2 mb-10">
        {text}
      </p>
    </>
  );
};

export default HeadingAndText;

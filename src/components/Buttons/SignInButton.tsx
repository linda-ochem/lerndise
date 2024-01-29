interface Props {
  children: string;
}

const SignInButton = ({ children }: Props) => {
  return (
    <>
      <button className="mt-1.5 text-sm font-semibold bg-white font-body w-[7rem] h-[2.5rem] p-2.5 rounded-s-3xl rounded-e-3xl">{children}</button>
    </>
  );
};

export default SignInButton;

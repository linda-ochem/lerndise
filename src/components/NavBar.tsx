import SignInButton from "./Buttons/SignInButton";

const NavBar = () => {
  return (
    <div className="bg-lerndis-black-pearl container w-4/5 mx-auto rounded-[56px] border border-solid border-black py-[5px] px-[75.5px]">
      <div className="flex justify-between border border-solid border-black">
        <h1 className="font-display py-2.5 text-xl font-bold text-lerndis-orange">
          Lerndise
        </h1>
        <ul className="my-4 font-body text-sm text-white border border-solid border-black flex w-[17.125rem] justify-between items-center m-0 p-0">
          <li>About Us</li>
          <li>Solutions</li>
          <li>Features</li>
        </ul>
        <SignInButton>Sign In</SignInButton>
      </div>
    </div>
  );
};

export default NavBar;

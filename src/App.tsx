import NavBar from "./components/NavBar";
import GetStarted from "./components/GetStarted";

const App = () => {
  return (
    <>
      <div className="pt-6 pb-6 bg-lerndis-white shadow-xl">
        <NavBar />
      </div>
      <div className="container w-[900px] mx-auto my-5">
        <GetStarted />
      </div>
    </>
  );
};

export default App;

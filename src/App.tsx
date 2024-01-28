import NavBar from "./components/NavBar";
import GetStarted from "./components/GetStarted";
import Values from "./components/Values";
import Solution from "./components/Solution";
import BlobSection from "./components/BlobSection";

const App = () => {
  return (
    <>
      <div className="pt-6 pb-6 bg-lerndis-white shadow-xl">
        <NavBar />
      </div>
      <div className="container w-[990px] mx-auto my-12">
        <GetStarted />
        <Values />
        <BlobSection/>
        <Solution />
      </div>
    </>
  );
};

export default App;

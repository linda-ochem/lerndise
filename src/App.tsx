import NavBar from "./components/NavBar";
import GetStarted from "./components/GetStarted";
import Values from "./components/Values";
import Solution from "./components/Solution";
import BlobSection from "./components/BlobSection";
import PlatformFeat from "./components/Platformfeatures";
import ContactSales from "./components/ContactSales";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="pt-6 pb-6 bg-lerndis-white shadow-xl">
        <NavBar />
      </div>
      <div className="container w-[830px] mx-auto my-12">
        <GetStarted />
        <Values />
        <BlobSection />
        <Solution />
      </div>
      <PlatformFeat />
      <ContactSales />
      <Footer />
    </>
  );
};

export default App;

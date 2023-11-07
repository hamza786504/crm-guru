import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";
import Aboutus from "./Components/Aboutus";
import Workwith from "./Components/Workwith";
import Hire from "./Components/Hire";
import Results from "./Components/Results";
import Expert from "./Components/Expert";
import Cusomer from "./Components/Cusomer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Expert />
      <Results />
      <Hire />
      <Aboutus />
      <Cusomer />
      <Workwith />
      <Faq />
      <Footer />
    </>
  );
}

export default App;

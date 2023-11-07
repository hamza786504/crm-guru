import "./App.css";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Footer from "./Components/Footer";
import Faq from "./Components/Faq";
import Aboutus from "./Components/Aboutus";
import Workwith from "./Components/Workwith";
import Hire from "./Components/Hire";
import Results from "./Components/Results";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Results />
      <Hire />
      <Aboutus />
      <Workwith />
      <Faq />
      <Footer />
    </>
  );
}

export default App;

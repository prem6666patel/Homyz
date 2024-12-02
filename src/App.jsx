import "./App.css";
import Compines from "./components/Compines";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Getstarted from "./components/Getstarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Residencies from "./components/Residencies";
import Value from "./components/Value";

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <Compines></Compines>
      <Residencies></Residencies>
      <Value></Value>
      <Contact></Contact>
      <Getstarted></Getstarted>
      <Footer></Footer>
    </>
  );
}

export default App;

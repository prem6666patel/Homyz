import "./App.css";
import Compines from "./components/Compines";
import Contact from "./components/Contact";
import ContactBtn from "./components/ContactBtn";
import Footer from "./components/Footer";
import Getstarted from "./components/Getstarted";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Residencies from "./components/Residencies";
import Value from "./components/Value";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/contactBtn",
      element: (
        <>
          <Header />
          <ContactBtn />
        </>
      ),
    },
    {
      path: "/",
      element: (
        <>
          <Header />
          <Hero />
          <Compines />
          <Residencies />
          <Value />
          <Contact />
          <Getstarted />
          <Footer />
        </>
      ),
    },
    {
      path: "/contactUs",
      element: (
        <>
          <Header />
          <Contact />
        </>
      ),
    },
    {
      path: "/value",
      element: (
        <>
          <Header />
          <Value />
        </>
      ),
    },
    {
      path: "/res",
      element: (
        <>
          <Header />
          <Residencies />
        </>
      ),
    },
    {
      path: "/get",
      element: (
        <>
          <Header />
          <Getstarted />
        </>
      ),
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;

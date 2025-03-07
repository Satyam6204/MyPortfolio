import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "./assets/pages/About";
import Home from "./assets/pages/Home";
import Contact from "./assets/pages/Contact";
import './App.css';
import Footer from "./assets/Components/Footer";
import Header from "./assets/Components/Header";

function App() {
  return (
    <>

      <Header />
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />

      </Routes>
      <Footer/>

    </>

  )

}
export default App;
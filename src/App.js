import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";

import Contact from "./components/contact";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
// import { HashRouter } from 'react-router-dom';
import About from "./components/about";
import Services from "./components/services";




function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>           
        <Routes>
          <Route path="pbm/services" element={<Services />} />
        </Routes>   
        <Routes>
          <Route path="pbm/contact" element={<Contact />} />
        </Routes>        
        <Routes>
          <Route path="pbm/about" element={<About />} />
        </Routes>
        <Footer />
  
    </>
  );
}

export default App;

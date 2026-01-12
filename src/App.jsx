import Footer from "./components/Footer.jsx"
import Hero from "./components/Hero.jsx"
import Nav from "./components/Nav.jsx"
import Download from "./components/Download.jsx";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./components/About.jsx";
import Services from "./components/Services.jsx";
import ContactUs from "./components/Contact.jsx";

const App = () => {
  return (
    
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/download" element={<Download/>}/>
      <Route path="/about" element={<AboutMe/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
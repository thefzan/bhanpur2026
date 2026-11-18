import Footer from "./components/Footer.jsx"
import Hero from "./components/Hero.jsx"
import Nav from "./components/Nav.jsx"
import Download from "./components/Download.jsx";
import { Routes, Route } from "react-router-dom";
import AboutMe from "./components/About.jsx";
import Services from "./components/Services.jsx";
import ContactUs from "./components/Contact.jsx";
import SelfEnumeration from "./components/SelfEnumeration.jsx";
import DownloadCards2 from "./components/Download2.jsx";

const App = () => {
  return (
    
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/download" element={<Download/>}/>
      <Route path="/download2" element={<DownloadCards2/>}/>
      <Route path="/about" element={<AboutMe/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<ContactUs/>}/>
      <Route path="/SelfEnumeration" element={<SelfEnumeration/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
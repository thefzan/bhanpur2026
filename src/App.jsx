import Footer from "./components/Footer.jsx"
import Hero from "./components/Hero.jsx"
import Nav from "./components/Nav.jsx"
import Download from "./components/Download.jsx";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/download" element={<Download/>}/>
    </Routes>
      <Footer/>
    </>
  )
}

export default App
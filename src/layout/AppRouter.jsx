import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Error from "../pages/Error";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Logement" element={<Logement />} /> 
          <Route path="/Error" element={<Error />} />         
      </Routes>
    </BrowserRouter>
  );
}

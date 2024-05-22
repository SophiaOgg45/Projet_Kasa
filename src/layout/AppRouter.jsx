import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Logement from "../pages/Logement";
import Error from "../pages/Error";
import PageLayout from "../layout/PageLayout";

export default function AppRouter() {
  return (
    <BrowserRouter>
 
      <Routes>
        <Route path="/" element={<PageLayout />} >
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Logement/:id" element={<Logement />} />
          <Route path="*" element={< Error />} />

        </Route>
      </Routes>

    </BrowserRouter>
  );
}


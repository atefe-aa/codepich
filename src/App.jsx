import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./styles/index.css";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import { useEffect } from "react";
import TeamCV from "./pages/TeamCV";
import Services from "./pages/Services";
import Process from "./pages/Process";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Adjust the duration of the animations
    });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="home" />} />
          <Route path="home" element={<Home />} />
          <Route path="why-us" element={<AboutUs />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="team-cv" element={<TeamCV />} />
          <Route path="services" element={<Services />} />
          <Route path="process" element={<Process />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

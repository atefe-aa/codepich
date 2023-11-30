import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import TeamCV from "./pages/TeamCV";
import Services from "./pages/Services";
import Process from "./pages/Process";
import WhyUs from './pages/WhyUs';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="why-us" element={<WhyUs />} />
        <Route path="contact" element={<ContactUs />} />
        <Route path="team-cv" element={<TeamCV />} />
        <Route path="services" element={<Services />} />
        <Route path="process" element={<Process />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App

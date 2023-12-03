import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import PageNotFound from "./pages/PageNotFound";
import TeamCV from "./pages/TeamCV";
import Services from "./pages/Services";
import Process from "./pages/Process";
import WhyUs from './pages/WhyUs';
import AboutPerson from './pages/AboutPerson';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
      },
    },
  });
  return (
    <QueryClientProvider client={queryClient}>
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
        <Route path="about/:name" element={<AboutPerson />} />
      </Route>
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  </BrowserRouter>
    </QueryClientProvider>
    
  )
}

export default App

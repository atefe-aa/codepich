import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function AppLayout() {
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/home";
  return (
    <main style={{ overflowX: "hidden" }}>
      <Header />
      <Outlet />
      {!isHomePage && <Footer />}
    </main>
  );
}

export default AppLayout;

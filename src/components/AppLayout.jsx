import { Outlet } from "react-router-dom";
import Header from "./Header";
import styles from "./AppLayout.module.css";
// import HeaderV2 from "./HeaderV2";

function AppLayout() {
  return (
    <main className={styles.bgMainPage}>
      <Header />
      <Outlet />
    </main>
  );
}

export default AppLayout;

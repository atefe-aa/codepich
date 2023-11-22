import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"
import styles from './AppLayout.module.css'

function AppLayout() {
    return (
        <div className={styles.bgMainPage}>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default AppLayout

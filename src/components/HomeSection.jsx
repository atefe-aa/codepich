import styles from "./Home.module.css"
function HomeSection() {
    return (
        <section className={` ${styles.homeSection}`}>
        <div className="row h-100">
          <div className="col-12 d-flex align-items-center flex-column h-100">
            <h1 className={styles.headerTitle} data-aos="zoom-in-down" data-aos-duration="600">کدپیچ | طراحی وبسایت کارآمد مثل پیچ</h1>
            <span className={styles.headerDescription} data-aos="fade-up" data-aos-duration="1000">با کدپیچ وبسایت پرفروش و کارآمد مانند پیچ را تجربه کنید</span>
          </div>
        </div>
      </section>
    )
}

export default HomeSection

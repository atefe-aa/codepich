import styles from "../styles/Home.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

import "swiper/css/pagination";
import "../styles/swiper.css";

// import required modules
import { Mousewheel } from "swiper/modules";
import SwiperCards from "../components/SwiperCards";
import Footer from "../components/Footer";

function Home() {
  return (
    <main id="home">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
        speed={1000}
      >
        {/* <Loading /> */}
        <SwiperSlide>
          <section
            className={`container-fluid content-header ${styles.bgMainPage}`}
          >
            <div className="row h-100">
              <div className="col-12 d-flex justify-content-center align-items-center flex-column h-100">
                <h1 className={styles.header_title}>
                  کدپیچ | طراحی وبسایت کارآمد مثل پیچ
                </h1>
                <span
                  className={styles.header_description}
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  با کدپیچ وبسایت پرفروش و کارآمد مانند پیچ را تجربه کنید
                </span>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <section
            className={`section container-fluid content-header p-0 ${styles.bgServices}`}
          >
            <div className={`container-fluid  ${styles.services_div}`}>
              <div className="row h-100">
                <div className="col-12 col-md-7 d-flex justify-content-center align-items-center h-100">
                  <p className={styles.about_us_para}>
                    تیم کدپیچ فعالیت خود را از ۱۴۰۲ با تلاش بسیار و پشتکار در
                    حوزه وب شروع کرده و تا کنون موفق به انجام چند پروژه در این
                    مدت بوده است. تیم کدپیچ ۴ عضو دارد و با پشتیبانی ۲۴ ساعته
                    اماده به پاسخگویی به شما و انجام خدمات وبسایت، سئو و طراحی
                    رابط کاربری است . تیم کدپیچ تمامی افراد قبل از عضویت در گروه
                    را سنجیده و بررسی کرده تا هنگام انجام پروژه ها هیچگونه دردسر
                    وجود نداشته باشد و شما با خیال راحت سفارش خود را ثبت کنید.
                  </p>
                </div>
                <div className={`col-12 col-md-5 col-div ${styles.colDiv}`}>
                  <div className="row h-100">
                    <div className="col-10 offset-1 d-flex justify-content-evenly align-items-center h-100">
                      <div
                        className={`d-flex justify-content-around align-items-center flex-column ${styles.services}`}
                      >
                        <div
                          className={`d-flex justify-content-around align-items-center ${styles.img_with_border}`}
                        >
                          <img
                            src="../assets/img/code.svg"
                            alt="code-icon"
                            className="img-fluid"
                          />
                        </div>
                        <span>Website</span>
                      </div>

                      <div
                        className={`d-flex justify-content-around align-items-center flex-column ${styles.services}`}
                      >
                        <div
                          className={`d-flex justify-content-around align-items-center ${styles.img_with_border}`}
                        >
                          <img
                            src="../assets/img/ui.svg"
                            alt="ui-icon"
                            className="img-fluid"
                          />
                        </div>
                        <span>UI & UX</span>
                      </div>

                      <div
                        className={`d-flex justify-content-around align-items-center flex-column ${styles.services}`}
                      >
                        <div
                          className={`d-flex justify-content-around align-items-center ${styles.img_with_border}`}
                        >
                          <img
                            src="../assets/img/android.svg"
                            alt="android-icon"
                            className="img-fluid"
                          />
                        </div>
                        <span>Android</span>
                      </div>

                      <div
                        className={`d-flex justify-content-around align-items-center flex-column ${styles.services}`}
                      >
                        <div
                          className={`d-flex justify-content-around align-items-center ${styles.img_with_border}`}
                        >
                          <img
                            src="../assets/img/ios.svg"
                            alt="ios-icon"
                            className="img-fluid"
                          />
                        </div>
                        <span>IOS</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section
            className={`section w-100 container-fluid ${styles.about_us_section}`}
          >
            <div className="container">
              <div className="row content-header h-auto pt-5">
                <div className="row h-100">
                  <div className="col-12 h-100 d-flex justify-content-center align-items-end">
                    <div className="row">
                      <div
                        className={`col-12 col-md-6 ${styles.div_about_team}`}
                      >
                        <h6
                          className={`${styles.title_section} position-relative`}
                        >
                          درباره کدپیچ
                        </h6>
                        <p className={styles.about_us_section_p}>
                          ایین یک ممتن نمون استایین یک متن نمون استایین یک متن
                          نمون استایین یک متن نمون استایین یک متن نمون استایین
                          یک متن نمون استایین یک متن نمون استایین یک متن نمون
                          استایین یک متن نمون استایین یک متن نمون است
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row content-header h-auto">
                <div className="col-12 h-100 d-flex justify-content-center align-items-start">
                  <div className="row">
                    <div className="col-12 col-lg-9 offset-0 offset-lg-3">
                      <img
                        src="../assets/img/img-services.svg"
                        alt="web-design-img"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className={styles.bg_team_cv}>
            <div className={styles.slideSection}>
              <SwiperCards />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.footer}>

          <Footer />
          </div>
        </SwiperSlide>
      </Swiper>
    </main>
  );
}

export default Home;

import Form from "../components/Form";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

// import required modules
import { EffectCards, Navigation } from "swiper/modules";
import { Element } from "react-scroll";


function Home() {
  return (
    <main>
      <Element name="section1">
        <section className="section active container-fluid content-header bg-main-page h-100">
          <div className="row h-100">
            <div className="col-12 d-flex justify-content-center align-items-center flex-column h-100">
              <h1
                className="header-title"
              >
                کدپیچ | طراحی وبسایت کارآمد مثل پیچ
              </h1>
              <span
                className="header-description"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                با کدپیچ وبسایت پرفروش و کارآمد مانند پیچ را تجربه کنید
              </span>
            </div>
          </div>
        </section>
      </Element>
      <Element name="section2">
        <section className="section container-fluid content-header bg-main-page p-0">
          <div className="row h-100">
            <div className="col-12 d-flex justify-content-center align-items-center flex-column h-100">
              <h1 className="header-title">
                کدپیچ | طراحی وبسایت کارآمد مثل پیچ
              </h1>
              <span className="header-description">
                با کدپیچ وبسایت پرفروش و کارآمد مانند پیچ را تجربه کنید
              </span>
            </div>
          </div>

          <div className="container-fluid services services-div h-auto">
            <div className="row h-100 div-row">
              <div className="col-12 col-md-7 d-flex justify-content-center align-items-center h-100">
                <p className="about-us-para about-us-footer">
                  تیم کدپیچ فعالیت خود را از ۱۴۰۲ با تلاش بسیار و پشتکار در حوزه
                  وب شروع کرده و تا کنون موفق به انجام چند پروژه در این مدت بوده
                  است. تیم کدپیچ ۴ عضو دارد و با پشتیبانی ۲۴ ساعته اماده به
                  پاسخگویی به شما و انجام خدمات وبسایت، سئو و طراحی رابط کاربری
                  است . تیم کدپیچ تمامی افراد قبل از عضویت در گروه را سنجیده و
                  بررسی کرده تا هنگام انجام پروژه ها هیچگونه دردسر وجود نداشته
                  باشد و شما با خیال راحت سفارش خود را ثبت کنید.
                </p>
              </div>
              <div className="col-12 col-md-5 col-div">
                <div className="row h-100 row-div">
                  <div className="col-10 offset-1 d-flex justify-content-evenly align-items-center h-100">
                    <div className="services d-flex justify-content-around align-items-center flex-column">
                      <div className="img-with-border d-flex justify-content-around align-items-center">
                        <img
                          src="../assets/img/code.svg"
                          alt="code-icon"
                          className="img-fluid"
                        />
                      </div>
                      <span>Website</span>
                    </div>

                    <div className="services d-flex justify-content-around align-items-center flex-column">
                      <div className="img-with-border d-flex justify-content-around align-items-center">
                        <img
                          src="../assets/img/ui.svg"
                          alt="ui-icon"
                          className="img-fluid"
                        />
                      </div>
                      <span>UI & UX</span>
                    </div>

                    <div className="services d-flex justify-content-around align-items-center flex-column">
                      <div className="img-with-border d-flex justify-content-around align-items-center">
                        <img
                          src="../assets/img/android.svg"
                          alt="android-icon"
                          className="img-fluid"
                        />
                      </div>
                      <span>Android</span>
                    </div>

                    <div className="services d-flex justify-content-around align-items-center flex-column">
                      <div className="img-with-border d-flex justify-content-around align-items-center">
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
      </Element>
      <Element name="section3">
        <section className="section about-us-section w-100 container-fluid">
          <div className="container">
            <div className="row content-header h-auto pt-5">
              <div className="row h-100">
                <div className="col-12 h-100 d-flex justify-content-center align-items-end">
                  <div className="row">
                    <div className="col-12 col-md-6 div-about-team">
                      <h6 className="title-section position-relative">
                        درباره کدپیچ
                      </h6>
                      <p className="about-us-section-p">
                        ایین یک ممتن نمون استایین یک متن نمون استایین یک متن
                        نمون استایین یک متن نمون استایین یک متن نمون استایین یک
                        متن نمون استایین یک متن نمون استایین یک متن نمون استایین
                        یک متن نمون استایین یک متن نمون است
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
      </Element>
      <Element name="section4">
        <section className="section container-fluid bg-team-cv">
          <section className="container content-header h-60">
            <div className="row pt-6">
              <div className="col-12 swiper">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  modules={[EffectCards, Navigation]}
                  navigation={true}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img
                      src="assets/img/project-1.svg"
                      alt="project-1"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="assets/img/project1.svg"
                      alt="project1"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="assets/img/project2.svg"
                      alt="project2"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="assets/img/project3.svg"
                      alt="project3"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="assets/img/project4.svg"
                      alt="project3"
                      className="img-fluid"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </section>
        </section>
      </Element>
    </main>
  );
}

export default Home;

import Service from "./Service";
import styles from "./ServicesSection.module.css";

function ServicesSection() {
  return (
    <div
      className={styles.servicesDiv}
    >
      <div className="row">
        <div className="col-12 col-md-7 d-flex justify-content-center align-items-center h-100">
          <p className={styles.aboutUsPara}>
            تیم کدپیچ فعالیت خود را از ۱۴۰۲ با تلاش بسیار و پشتکار در حوزه وب
            شروع کرده و تا کنون موفق به انجام چند پروژه در این مدت بوده است. تیم
            کدپیچ ۴ عضو دارد و با پشتیبانی ۲۴ ساعته اماده به پاسخگویی به شما و
            انجام خدمات وبسایت، سئو و طراحی رابط کاربری است . تیم کدپیچ تمامی
            افراد قبل از عضویت در گروه را سنجیده و بررسی کرده تا هنگام انجام
            پروژه ها هیچگونه دردسر وجود نداشته باشد و شما با خیال راحت سفارش خود
            را ثبت کنید.
          </p>
        </div>
        <div className="col-12 col-md-5 mt-4 ">
          <div className="row h-100">
            <div className="col-10 offset-1 d-flex justify-content-evenly align-items-center ">
              <Service
                src="assets/img/code.svg"
                alt="code-icon"
                text="Website"
              />
              <Service src="assets/img/ui.svg" alt="ui-icon" text="UI & UX" />
              <Service
                src="assets/img/android.svg"
                alt="android-icon"
                text="Android"
              />
              <Service src="assets/img/ios.svg" alt="ios-icon" text="IOS" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;

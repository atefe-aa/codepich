import ContactDiv from "../components/ContactDiv";
import StepTag from "../components/StepTag";
import styles from "../styles/Process.module.css";

function Process() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.section1}>
        <div className={styles.openingDiv}>
          <h5 className="ps-3">
            .برای عرضه محصول خود با یک تیم متخصص همکاری کنید
          </h5>
          <hr />
          <p className="ps-3">
            روند ما شما را در 3 مرحله از یک طرح دستمال به یک برنامه تلفن همراه
            یا برنامه وب کاملاً توسعه یافته می برد. سپس می توانید به موفقیت خود
            ادامه دهید
          </p>
        </div>

        <div className={`${styles.pic} ${styles.magniPic}`}>
          <img className="img-fluid" src="/assets/img/magnifire.svg" alt="magnifire on an app icon" />
        </div>
      </div>

      <StepTag stepTitle="مرحله یک" />
      <div className={styles.stepOne}>
        <div className={`${styles.box}`}>
          <p>
            .مشابه ساخت یک خانه سفارشی، تصمیمات زیادی در نرم افزار سفارشی شما
            وجود دارد. SolutionLab مانند استخدام یک معمار برای طراحی خانه جدید
            سفارشی شما قبل از ریختن سیمان توسط پیمانکار است. یک طرح کامل، تیم
            طراحان و توسعه دهندگان شما را در یک صفحه نگه می دارد
          </p>
        </div>
        <div className={`${styles.pic} ${styles.whiteboardMan}`}>
          <img className="img-fluid"
            src="/assets/img/whiteboardMan.svg"
            alt="a guy writing on a whiteboard"
          />
        </div>
      </div>

      <StepTag stepTitle="مرحله دو" />
      <div className={styles.stepTwo}>
        <div className={`${styles.box}`}>
          <div className={styles.stepTitle}>طراحی گرافیک و نمونه سازی</div>
          <p>
            خرید ایمن از کاربران و ذینفعان آینده را با یک نمونه اولیه تعاملی
            تضمین کنید تا مطمئن شوید که چیز درستی می‌سازید.
          </p>
        </div>
        <div className={styles.verticalBar}></div>
        <div className={`${styles.box}`}>
          <h5>خروجی طراحی و نمونه سازی:</h5>
          <p>
            شما یک شبیه‌سازی کامل از محصول دیجیتال خود خواهید داشت تا دقیقاً
            نحوه ظاهر، احساس و عملکرد هر صفحه نمایش را نشان دهید. همه صفحه‌های
            برنامه یا وب‌سایت شما به یک نمونه اولیه قابل استفاده تبدیل می‌شوند.
            آن را بر روی تلفن خود نصب کنید یا یک پیوند ارسال کنید، سپس از سرمایه
            گذاران، اعتبارسنجی از کاربران آینده و بازخورد سهامداران دریافت کنید.
            با این خرید، می توانید با اطمینان کامل وارد توسعه شوید
          </p>
        </div>
        <div className={`${styles.pic} ${styles.uiDesigner}`}>
          <img className="img-fluid"
            src="/assets/img/ui-designer.svg"
            alt="a guy working with computer designing UI"
          />
        </div>
      </div>
      <StepTag stepTitle="مرحله سه" />
      <div className={styles.stepThree}>
        <div className={`${styles.box}`}>
          <div className={styles.stepTitle}>توسعه</div>
          <p>
            اینجاست که ما کد می نویسیم. ما از متدولوژی Agile برای تقسیم پروژه ها
            به Sprint های قابل هضم استفاده می کنیم. این امکان آزمایش منظم ویژگی
            های کلیدی و همچنین به روز رسانی منظم پیشرفت را فراهم می کند. هر
            هفته، می‌توانید کارهای انجام شده را ببینید و بدانید در آینده چه
            اتفاقی می‌افتد
          </p>
        </div>
        <div className={styles.verticalBar}></div>
        <div className={`${styles.box}`}>
          <h5>خروجی توسعه:</h5>
          <p>
            برنامه یا وب سایت فعال و قابل نصب شما آماده پذیرش کاربران، انجام
            عملکرد مورد نظر خود و ایجاد درآمد است. ما هر ویژگی را به صورت
            جداگانه نقل قول می‌کنیم، به این معنی که می‌دانید اضافه کردن آن
            ویژگی‌های زیبا در تکرارهای آینده چقدر هزینه دارد. این همچنین تضمین
            می کند که اولین نسخه شما شامل تمام عملکردهای اصلی بدون پیشی گرفتن از
            بودجه است
          </p>
        </div>
        <div className={`${styles.pic} ${styles.computerPic}`}>
          <img className="img-fluid"
            src="/assets/img/computer.svg"
            alt="a gir smaller than a computer, codding"
          />
        </div>
      </div>

      <div className={styles.cycle}>
        <img className="img-fluid" src="/assets/img/developping-cycle.svg" />
      </div>

      <StepTag stepTitle="مرحله چهار" />
      <div className={styles.stepFour}>
        <div className={`${styles.box}`}>
          <div className={styles.stepTitle}>تعمیر نگهداری و تکرار</div>
          <p>
            بر اساس تجزیه و تحلیل و بازخورد جمع آوری شده از کاربران محصول شما،
            تمرکز ما بر افزایش رضایت و تعامل مشتری خواهد بود. بازخورد کاربر باعث
            اولویت بندی می شود زیرا ما انباشته ویژگی ها و پیشرفت های جدید را
            مدیریت می کنیم
          </p>
        </div>
        <div className={styles.verticalBar}></div>
        <div className={`${styles.box}`}>
          <h5>خروجی تعمیر و نگهداری و تکرار:</h5>
          <p>
            اجرای منظم پیشرفت‌ها باعث می‌شود برنامه یا وب‌سایت شما در طول زمان
            شیک‌تر و دارای ویژگی‌های غنی‌تر شود. افزودن قابلیت‌ها باعث می‌شود
            کاربران شما درگیر شوند و کسب‌وکار شما در حال زمزمه کردن است زیرا
            محصول شما هر روز ارزش بیشتری پیدا می‌کند
          </p>
        </div>
        <div className={`${styles.pic} ${styles.maintainPic}`}>
          <img className="img-fluid"
            src="/assets/img/maintain.svg"
            alt="a gir on ladder try to stick an element to a screen"
          />
        </div>
      </div>

<div className={styles.contactSection}>

      <ContactDiv />
</div>
    </section>
  );
}

export default Process;

import { Link } from "react-router-dom";
import styles from "../styles/WhyUs.module.css";
import { scrollToTop } from "../utils/helpers";

function WhyUs() {
  return (
    <>
      <section className={styles.section1}>
        <div className={styles.card}>
          <h5>راه اندازی یک ابتکار نرم افزار جدید سخت است. این نباید باشد.</h5>
          <p>
            ما اینجا هستیم تا شما را در فرآیند ساخت و راه اندازی محصولات دیجیتال
            پیچیده راهنمایی کنیم
          </p>
        </div>
      </section>
      <section  className={styles.bg2}>
        <section className={styles.section2}>
        <div className={styles.whyUsBox}>
          <div className={`${styles.line} ${styles.lineTop}`}></div>
          <h4>چرا ما؟</h4>
          <p className={styles.whyUsP}>
            هیچ چیز شما را به اندازه تجربه شخصی خود در حل یک مشکل سخت نمی کند.
            چرا تیم ما اینقدر در صدد آسان کردن نرم افزار است؟ در اینجا یک پس
            زمینه سریع وجود دارد
          </p>
          <div className={`${styles.line} ${styles.lineBottom}`}></div>
        </div>
        <div className={styles.whysBox}>
          <div className={`${styles.whys} ${styles.whys1}`}>
            <div className="d-flex align-items-center justify-content-end">
              <h5 className={styles.h5}>سفرآغازمیشود</h5>
              <div className={`w-100 ${styles.line}`}></div>
            </div>

            <p>
              بنیانگذاران ما در دوران تحصیل در کالج، استارتاپی به نام Applits
              راه اندازی کردند که مأموریت داشت با جمع سپاری ایده های اپلیکیشن،
              صنعت اپلیکیشن های موبایل را تکان دهد. انجمن Applits ایده‌هایی را
              برای «برنامه بزرگ بعدی» ارسال کرد و یک فرآیند رأی‌گیری عمومی تعیین
              کرد که کدام برنامه‌ها زنده می‌شوند
            </p>
          </div>
          <div className={`${styles.whys} ${styles.whys2}`}>
            <div className="d-flex align-items-center justify-content-end">
              <div className={`w-100 ${styles.line}`}></div>
              <h5 className={styles.h5}>ساختاپلیکیشنسختاست</h5>
            </div>
            <p>
              سه سال، بیش از 2000 ایده و 16 برنامه راه‌اندازی شده بعد، ما به طور
              مستقیم به استراتژی‌ها و مبارزات طراحی و توسعه برنامه‌های موبایلی
              با کیفیت پی بردیم. ما کمبود شدید آژانس‌هایی را پیدا کردیم که
              نیازهای استارت‌آپ‌ها را درک کنند و کسب‌وکارهایی را تأسیس کنند که
              از دلیل ایجاد نرم‌افزار آگاه باشند و فرآیندی داشته باشند که موفقیت
              محصول را با کاربرانش تضمین کند
            </p>
          </div>
          <div className={`${styles.whys} ${styles.whys3}`}>
            <div className="d-flex align-items-center justify-content-end">
              <h5 className={styles.h5}>متولدمیشود</h5>
              <div className={`w-100 ${styles.line}`}></div>
            </div>
            <p>
              برای ما مشخص شد که در مرحله بعد چه کار کنیم: تصمیم گرفتیم Applits
              را ببندیم تا بتوانیم آژانس خود را برای حل این مشکلات دقیق ایجاد
              کنیم. با پیروی از فلسفه کلاسیک «ضرورت مادر اختراع است»، ما چیزی را
              ساختیم که آرزو می‌کردیم سال‌ها پیش به‌عنوان مشتریان پرداخت‌کننده
              پیدا می‌کردیم. ما فرآیند خود را برای شناسایی اقدامات و مراحل کلیدی
              برای موفقیت در هنگام ساختن نرم‌افزار موبایل اول برای مصرف‌کنندگان
              خواستار بررسی کرده‌ایم
            </p>
          </div>
          <div className={`${styles.whys} ${styles.whys4}`}>
            <div className="d-flex align-items-center justify-content-end">
              <div className={`w-100 ${styles.line}`}></div>
              <h5 className={styles.h5}>دردسترسقراردادننرمافزار</h5>
            </div>
            <p>
              ما یک تیم با استعداد داریم که خود را وقف موفقیت پروژه شما می کنند
              و شما را از طریق اکوسیستم پیچیده ایجاد نرم افزار سفارشی راهنمایی
              می کنند. ما بارها و بارها ثابت کرده‌ایم که توسعه برنامه نیازی به
              پیچیده نیست. با Designli، می توانید انتظار داشته باشید که روند
              ساخت یک محصول دیجیتال هرگز یک رمز و راز نباشد
            </p>
          </div>
        </div>
        <div className={styles.line}></div>
      </section>
      <section className={styles.section3}>
        <div className={styles.cardSection3}>
          <p>
            با ما آشنا شوید: ما مشتاقانه منتظر بررسی مشکل شما و همکاری در راه حل
            هستیم
          </p>
        </div>
      </section>
      <section className={styles.section4}>
        <div className={styles.teamPart}>
          <div className="d-flex justify-content-end">
            <img className={styles.teamImage} src="/assets/img/team.svg" />
          </div>

          <div
            className={`${styles.personContainer} ${styles.atefe}  ${styles.personRight}`}
          >
            <div className={styles.personPic}>
              <img src="assets/img/atefe-pic.svg" />
            </div>
            <div className={styles.personName}>عاطفه</div>
            <p className={styles.aboutPerson}>
              تمام چیزی که عاطفه برای تولد 10 سالگی خود می خواست یک نام دامنه
              بود. چند سالی به دبیرستان رفت، و وقتی مادرش به او گفت که یک کار
              تابستانی پیدا کند، او ترجیح داد به جای شروع به چمن زنی، وب سایت
              خود را بفروشد. کیث زمانی که در رشته مهندسی مکانیک از دانشگاه
              ایالتی اوهایو کار می‌کرد، وقت خود را صرف کدنویسی وب‌سایت‌ها و
              راه‌اندازی کلوپ رپ و بیت‌باکس آزاد ایالت اوهایو کرد، که تبدیل به
              یکی از بزرگترین سازمان‌های دانشجویی در محوطه دانشگاه شد. کیت با
              جاش (در زیر) برای ایجاد یک استارت‌آپ کالج، Applits، به نام
              «باحال‌ترین استارت‌آپ کالج در سال 2014» در Inc.com همراه شد و از
              آن زمان تاکنون پروژه‌های برنامه‌ها و برنامه‌های وب را با Designli
              رهبری می‌کند
            </p>
          </div>
          <div
            className={`${styles.personContainer} ${styles.mahan} ${styles.personLeft}`}
          >
            <div className={styles.personPic}>
              <img src="assets/img/mahan-pic.svg" />
            </div>
            <div className={styles.personName}>ماهان</div>
            <p className={styles.aboutPerson}>
              ماهان یک متضاد طبیعی است و اغلب وقتی فکر می کند راه بهتری وجود
              دارد، مخالف جمعیت است. جاش که یک ورزشکار کالج و دانشجوی مهندسی بود
              کالج را رها کرد، می خواست به جای گرفتن مدرک، کارآفرینی را دنبال
              کند. این زمانی بود که او با کیث همکاری کرد و اشتیاق خود را به
              پیچیدگی های فنی ساخت و راه اندازی سیستم های نرم افزاری جدید پیدا
              کرد. جاش به‌عنوان یک خلبان خصوصی، غواص و علاقه‌مند به امور مالی
              شخصی مشتاق، «جک سرگرمی‌های متعدد» و استاد، خوب، برخی است. جاش
              به‌عنوان مدیر اجرایی Designli، از یادگیری نحوه عملکرد کسب‌وکار
              مشتریان و کشف نحوه طراحی و پیاده‌سازی نرم‌افزار برای حل مشکلات
              آنها لذت می‌برد
            </p>
          </div>
          <div
            className={`${styles.personContainer} ${styles.zahra} ${styles.personRight}`}
          >
            <div className={styles.personPic}>
              <img src="assets/img/zahra-pic.svg" />
            </div>
            <div className={styles.personName}>زهرا</div>
            <p className={styles.aboutPerson}>
              من از بچگی علاقه زیادی به عکس گرفتن و ادیت عکس و فیلم، درست کردن
              کلیپ با عکس یا هر چیز دیگه داشتم. وقتی یه کامپیوتر درب داغون قدیمی
              خریدیم انگار دنیا مال من بود خیلی کوچیک بودم ولی با نرم افزارهایی
              مثل pint و powerpoint سعی میکردم اثر هنری خلق کنم در نهایت وقتی
              رسیدم به هنرستان سریعا رشته مورد علاقمو پیدا کردم
              &quot;گرافیک&quot;! از سال 1397 تا به الان دست از گرافیک نکشیدم و
              هروز علاقم بیشتر شده و حالا به جایی رسیدم که در هر زمینه ای از
              گرافیک توانایی دارم و هروز در تلاشم که توانایی هامو افزایش بدم
            </p>
          </div>
          <div
            className={`${styles.personContainer} ${styles.amir} ${styles.personLeft}`}
          >
            <div className={styles.personPic}>
              <img src="assets/img/amir-pic.svg" />
            </div>
            <div className={styles.personName}>امیر</div>
            <p className={styles.aboutPerson}>
              ماهان یک متضاد طبیعی است و اغلب وقتی فکر می کند راه بهتری وجود
              دارد، مخالف جمعیت است. جاش که یک ورزشکار کالج و دانشجوی مهندسی بود
              کالج را رها کرد، می خواست به جای گرفتن مدرک، کارآفرینی را دنبال
              کند. این زمانی بود که او با کیث همکاری کرد و اشتیاق خود را به
              پیچیدگی های فنی ساخت و راه اندازی سیستم های نرم افزاری جدید پیدا
              کرد. جاش به‌عنوان یک خلبان خصوصی، غواص و علاقه‌مند به امور مالی
              شخصی مشتاق، «جک سرگرمی‌های متعدد» و استاد، خوب، برخی است. جاش
              به‌عنوان مدیر اجرایی Designli، از یادگیری نحوه عملکرد کسب‌وکار
              مشتریان و کشف نحوه طراحی و پیاده‌سازی نرم‌افزار برای حل مشکلات
              آنها لذت می‌برد
            </p>
          </div>
        </div>
        <div
          className={styles.contactDiv}>
          <h3>ما دوست داریم درمورد محصول یا ایده شما بشنویم</h3>
          <Link
            to="/contact"
            onClick={scrollToTop}
            className={styles.contactBtn}
          >
            با ما در تماس باشید
          </Link>
        </div>
      </section>
      </section>
      
    </>
  );
}

export default WhyUs;

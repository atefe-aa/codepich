import ContactDiv from "../components/ContactDiv";

function Services() {
  return (
    <>
      <section className="aboutus-section w-100 p-0">
        <div className="container">
          <div className="row pt-3">
            <div className="text-top mt-5 pt-6">
              <h1>کدپیچ همراه همیشگی؛</h1>
              <p>تیم کدپیچ از اول تا آخر ماجرا در کنار شماست</p>
            </div>
            <div className="col-12 offset-0 col-md-10 offset-md-1 col-lg-6 offset-lg-3 position-absolute bottom-20px end-0 start-0">
              <p className="about-us-para p-about-us p-0 m-0">
                تیمی از کارشناسان مجرب را برای تعریف، طراحی، ساخت و نگهداری
                اپلیکیشن یا وب سایت سفارشی خود بیاورید. کد پیچ با مشتریانی از
                سراسر جهان کار می کند که از طریق ابتکارات فناوری در حال ایجاد
                مشاغل بزرگ هستند تیمی از کارشناسان مجرب را برای تعریف، طراحی،
                ساخت و نگهداری اپلیکیشن یا وب سایت سفارشی خود بیاورید. کد پیچ با
                مشتریانی از سراسر جهان کار می کند که از طریق ابتکارات فناوری در
                حال ایجاد مشاغل بزرگ
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="step-section w-100 px-0 py-5">
        <div className="container">
          <div className="row align-items-center mb-4">
            <div className="col-12 col-md-5 col-lg-6 mb-3">
              <div className="card rounded-3 bg-transparent border-white text-white">
                <div className="card-body">
                  <div className="card-title border-bottom pb-2 px-2 mx-3">
                    خدمات وب
                  </div>
                  <ul>
                    <li className="d-block py-3 list-option">
                      طراحی و توسعه وبسایت
                    </li>
                    <li className="d-block pb-3 list-option">
                      توسعه وب اپلیکیشن
                    </li>
                    <li className="d-block pb-3 list-option">
                      توسعه وبسایت سفارشی
                    </li>
                    <li className="d-block pb-3 list-option">
                      توسعه مجدد و رفع مشکل وبسایت
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-6 d-flex justify-content-center">
              <img
                src="/assets/img/svg/computer-c-432.svg"
                alt="computer-img"
                className="img-fluid w-75"
              />
            </div>
          </div>
          <div className="row align-items-center mb-4">
            <div className="col-12 col-md-7 col-lg-6 d-flex justify-content-center order-last order-md-first">
              <img
                src="/assets/img/svg/uiux.svg"
                alt="computer-img"
                className="img-fluid w-75"
              />
            </div>
            <div className="col-12 col-md-5 col-lg-6 my-3 order-first order-md-last">
              <div className="card rounded-3 bg-transparent border-white text-white">
                <div className="card-body">
                  <div className="card-title border-bottom pb-2 px-2 mx-3">
                    طراحی رابط کاربری
                  </div>
                  <ul>
                    <li className="d-block py-3 list-option">طراحی UI\UX</li>
                    <li className="d-block pb-3 list-option">
                      نمودار های جریان محور
                    </li>
                    <li className="d-block pb-3 list-option">
                      طراحی کاربر پسند و مناسب با وبسایت شما
                    </li>
                    <li className="d-block pb-3 list-option">
                      رعایت قوانین UX و UI
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ContactDiv />
        </div>
      </section>
    </>
  );
}

export default Services;

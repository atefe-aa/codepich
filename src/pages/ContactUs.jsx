function ContactUs() {
    return (
        <div className="contact-us-page">
      <section className="contact-page container-fluid">
        <div className="row">
          <div className="text-top">
            <h1>یک قدم تا وبسایت رویاهایتان مانده است</h1>
            <p>با ما در ارتباط باشید تا وبسایت رویاهایتان را به راحتی و در سریعترین زمان دریافت کنید</p>
          </div>
          <div className="col-12 col-md-10 offset-0 offset-md-1 mt-5 form-contact-us-page mb-5">
            <form action="" method="post" autoComplete="off" className="form-page form">
              <h6>اطلاعات تماس شما</h6>
              <div className="d-flex">
                <div className="input-group input-div-special input-div" style="margin: 0 0 0 10px">
                  <input type="text" id="name-input" name="name-input" placeholder="نام و نام خانوداگی :" />
                </div>
                <div className="input-group input-div-special input-div">
                  <input type="number" id="phone-input" name="phone-input" placeholder="شماره تلفن : " style="direction: rtl" />
                </div>
              </div>
              <div className="input-group input-div">
                <input type="email" id="email-input" name="email-input" placeholder="پست الکترونیکی : " />
              </div>
              <h6 className="my-3 ps-1">جزییات پروژه</h6>
              <div className="input-group input-div">
                <textarea name="description" id="description" placeholder="توضیحات پروژه ...."></textarea>
              </div>
              <h6 className="my-3 ps-1">جزییات شرکت</h6>
              <div className="input-group input-div">
                <input type="text" id="about-company-input" name="about-company-input" placeholder="جزییات شرکت :" />
              </div>
              <button className="btn-custom mt-2">درخواست مشاوره</button>
            </form>
          </div>
        </div>
      </section>
    </div>
    )
}

export default ContactUs

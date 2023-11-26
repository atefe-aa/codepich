function AboutSection() {
  return (
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
                    ایین یک ممتن نمون استایین یک متن نمون استایین یک متن نمون
                    استایین یک متن نمون استایین یک متن نمون استایین یک متن نمون
                    استایین یک متن نمون استایین یک متن نمون استایین یک متن نمون
                    استایین یک متن نمون است
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
                  src="assets/img/img-services.svg"
                  alt="web-design-img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;

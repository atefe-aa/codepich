import styles from "./AboutSection.module.css"

function AboutSection() {
  return (
    <section className={`section w-100 container-fluid ${styles.aboutUsSection}`}>
      <div className="container">
        <div className="row content-header pt-5">
          <div className="row h-100">
            <div className="col-12 h-100 d-flex justify-content-center align-items-end">
              <div className="row">
                <div className={`col-12 col-md-6 ${styles.divAboutTeam}`}>
                  <h6 className= {`position-relative ${styles.titleSection}`}>
                    درباره کدپیچ
                  </h6>
                  <p className={styles.aboutUsSectionP}>
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
          <div className="">
            <div className="row">
              <div className="col-12 col-lg-12 offset-0 offset-lg-3">
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

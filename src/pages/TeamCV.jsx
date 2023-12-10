import { Link, Outlet } from "react-router-dom";
import { scrollToTop } from "../utils/helpers";
import Project from "../components/Project";
import styles from "../styles/TeamCV.module.css";
import { PROJECTS } from "../utils/consts";

function TeamCV() {
  return (
    <>
      <section className={`w-100 text-white ${styles.codepich_cv}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center flex-column">
              <div className={`text-top ${styles.div_cv}`}>
                <h3 className="mt-5">رزومه تیم کدپیچ</h3>
                <p className={`mt-2 ${styles.description_cv_p}`}>
                  تمام نمونه کارهایی که تیم کدپیچ با موفقیت قادر به انجام آنها
                  بوده است
                </p>
              </div>
              <img
                src="/assets/img/svg/img-139.svg"
                alt="img-computer"
                className={`img-fluid w-25 ${styles.img_cv}`}
              />
            </div>
          </div>
        </div>
      </section>
      <section className={` w-100 h-auto py-5 ${styles.cv_section}`}>
        <div
          className={`container  card border-white bg-transparent rounded-4 ${styles.cv_container}`}
        >
          <div className="row pt-5 pb-5 g-5">
            {Object.entries(PROJECTS).map(([projectName, projectData]) => (
              <Project
                key={projectData.bigImages[0].id}
                data={projectData}
                projectName={projectName}
              />
            ))}
             <Outlet />
          </div>
          <Link
            to="/projects"
            type="button"
            className={`btn btn-dark position-absolute  py-3 px-4 ${styles.btn_more_cvs}`}
          >
            نمایش بیشتر
          </Link>
        </div>
        <div
          className={`w-100 h-auto py-5 container mt-5 ${styles.team_member}`}
        >
          <div className="row">
            <div className="col-12">
              <h6 className={styles.title_team_member}>اعضای تیم</h6>
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center pt-4">
              <img
                src="/assets/img/svg/img2429.svg"
                alt="img-team"
                className="img-fluid w-75"
              />
            </div>
          </div>
          <div className="row g-5 mt-4">
            <div className="col-12 col-md-4 position-relative offset-0 offset-md-2">
              <div className={`${styles.glass_bg} ${styles.mahan}`}>
                <p className={`mt-2 ${styles.description_cv_p}`}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده
                </p>
              </div>
              <Link
                onClick={scrollToTop}
                to="/about/mahan"
                className={styles.showMoreBtn}
              >
                نمایش بیشتر
              </Link>
            </div>
            <div className="col-12 col-md-4 position-relative">
              <div className={`${styles.glass_bg} ${styles.atefe}`}>
                <p className={`mt-2 ${styles.description_cv_p}`}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده
                </p>
              </div>
              <Link
                onClick={scrollToTop}
                to="/about/atefe"
                className={styles.showMoreBtn}
              >
                نمایش بیشتر
              </Link>
            </div>
            <div className="col-12 col-md-4 position-relative offset-0 offset-md-2 mb-5">
              <div className={`${styles.glass_bg} ${styles.amir}`}>
                <p className={`mt-2 ${styles.description_cv_p}`}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده
                </p>
              </div>
              <Link
                onClick={scrollToTop}
                to="/about/amir"
                className={styles.showMoreBtn}
              >
                نمایش بیشتر
              </Link>
            </div>
            <div className="col-12 col-md-4 position-relative mb-5">
              <div className={`${styles.glass_bg} ${styles.zahra}`}>
                <p className={`mt-2 ${styles.description_cv_p}`}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده
                </p>
              </div>
              <Link
                onClick={scrollToTop}
                to="/about/zahra"
                className={styles.showMoreBtn}
              >
                نمایش بیشتر
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamCV;

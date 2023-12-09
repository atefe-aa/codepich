import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/helpers";
import Project from "../components/Project";

function TeamCV() {
  return (
    <>
      <section className="codepich-cv w-100 text-white">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex justify-content-between align-items-center flex-column">
              <div className="div-cv text-top">
                <h3 className="mt-5">رزومه تیم کدپیچ</h3>
                <p className="description-cv-p mt-2">
                  تمام نمونه کارهایی که تیم کدپیچ با موفقیت قادر به انجام آنها
                  بوده است
                </p>
              </div>
              <img
                src="/assets/img/svg/img-139.svg"
                alt="img-computer"
                className="img-fluid w-25 img-cv"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cv-section w-100 h-auto py-5">
        <div className="container cv-container card border-white bg-transparent rounded-4">
          <div className="row pt-5 g-0">

            <Project src="/assets/img/projects/project1.svg" link='/project1' />
            <Project src="/assets/img/projects/project1.svg" link='/project1' />
            <Project src="/assets/img/projects/project1.svg" link='/project1' />
            <Project src="/assets/img/projects/project-1.svg" link='/project1' />
        

          </div>
        </div>
        <div className="team-member w-100 h-auto py-5 container mt-5">
          <div className="row">
            <div className="col-12">
              <h6 className="title-team-member">اعضای تیم</h6>
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
              <div className="glass-bg mahan">
                <p className="description-cv-p mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده
                </p>
              </div>
              <Link onClick={scrollToTop} to='/about/mahan' className="showMoreBtn">نمایش بیشتر</Link>
            </div>
            <div className="col-12 col-md-4 position-relative">
              <div className="glass-bg atefe">
                <p className="description-cv-p mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده
                </p>
              </div>
              <Link onClick={scrollToTop} to='/about/atefe' className="showMoreBtn">نمایش بیشتر</Link>
            </div>
            <div className="col-12 col-md-4 position-relative offset-0 offset-md-2 mb-5">
              <div className="glass-bg amir">
                <p className="description-cv-p mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده
                </p>
              </div>
              <Link onClick={scrollToTop} to='/about/amir' className="showMoreBtn">نمایش بیشتر</Link>
            </div>
            <div className="col-12 col-md-4 position-relative mb-5">
              <div className="glass-bg zahra">
                <p className="description-cv-p mt-2">
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد کتابهای زیادی در شصت و سه درصد گذشته حال و
                  آینده
                </p>
              </div>
              <Link onClick={scrollToTop} to='/about/zahra' className="showMoreBtn">نمایش بیشتر</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamCV;

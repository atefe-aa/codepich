function CvSection() {
  return (
    <section className="section container-fluid bg-team-cv">
      <section className="container content-header h-60">
        <div className="row pt-6">
          <div className="col-12 swiper">
            <swiper-container
              className="mySwiper"
              effect="cards"
              grab-cursor="true"
            >
              <swiper-slide className="swiper-slide">
                <img
                  src="assets/img/project-1.svg"
                  alt="project-1"
                  className="img-fluid"
                />
              </swiper-slide>
              <swiper-slide className="swiper-slide">Slide 2</swiper-slide>
              <swiper-slide className="swiper-slide">Slide 3</swiper-slide>
              <swiper-slide className="swiper-slide">Slide 4</swiper-slide>
              <swiper-slide className="swiper-slide">Slide 5</swiper-slide>
              <swiper-slide className="swiper-slide">Slide 6</swiper-slide>
              <swiper-slide className="swiper-slide">Slide 7</swiper-slide>
              <swiper-slide className="swiper-slide">Slide 8</swiper-slide>
              <swiper-slide className="swiper-slide">Slide 9</swiper-slide>
            </swiper-container>
          </div>
        </div>
      </section>
    </section>
  );
}

export default CvSection;

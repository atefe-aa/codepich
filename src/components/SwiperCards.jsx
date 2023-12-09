// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "../styles/SwiperCards.module.css";

// import required modules
import { EffectCards, Navigation } from "swiper/modules";

export default function SwiperCards() {
  return (
    <Swiper
      effect={"cards"}
      grabCursor={true}
      modules={[EffectCards, Navigation]}
      className={`mySwiper2 ${styles.swiper}`}
      navigation={true}
    >
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/assets/img/projects/project-1.svg" alt="project-1" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/assets/img/projects/project1.svg" alt="project1" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/assets/img/projects/project2.svg" alt="project2" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/assets/img/projects/project4.svg" alt="project2" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/assets/img/projects/project3.svg" alt="project2" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/assets/img/projects/project4.svg" alt="project2" />
      </SwiperSlide>
      <SwiperSlide className={styles.swiperSlide}>
        <img src="/assets/img/projects/project2.svg" alt="project2" />
      </SwiperSlide>
    </Swiper>
  );
}

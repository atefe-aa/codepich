// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "../styles/SwiperCards.module.css";

// import required modules
import { EffectCards, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { PROJECTS } from "../utils/consts";

export default function SwiperCards() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const swiperProps = {
    effect: "cards",
    grabCursor: true,
    loop: true,
    modules: [EffectCards, Navigation],
    className: `mySwiper2 ${styles.swiper}`,
    navigation: true,
  };
  return (
    <Swiper {...swiperProps}>
      {windowWidth >= 768
        ? Object.values(PROJECTS).map((project) =>
            project.bigImages?.map((image) => (
              <SwiperSlide key={image.id} className={styles.swiperSlide}>
                <img src={image.src} alt={image.alt} />
              </SwiperSlide>
            ))
          )
        : Object.values(PROJECTS).map((project) =>
            project.smallImages?.map((image) => (
              <SwiperSlide key={image.id} className={styles.swiperSlide}>
                <img src={image.src} alt={image.alt} />
              </SwiperSlide>
            ))
          )}
    </Swiper>
  );
}

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "../styles/SwiperCards.module.css";

// import required modules
import { EffectCards, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

export default function SwiperCards() {
  const bigImages = [
    {
      src: "/assets/img/projects/tarkhine/tarkhine1.png",
      alt: "tarkhine project",
    },
    {
      src: "/assets/img/projects/theWildOasis/thewildoasis4.png",
      alt: "the wild oasis project",
    },
    {
      src: "/assets/img/projects/worldWise/worldwise3.png",
      alt: "world wise project",
    },
    {
      src: "/assets/img/projects/visitouriran/visitouriran.png",
      alt: "visit our iran project",
    },
    {
      src: "/assets/img/projects/worldWise/worldwise4.png",
      alt: "world wise project",
    },
    {
      src: "/assets/img/projects/tarkhine/tarkhine2.png",
      alt: "tarkhine project",
    },
    {
      src: "/assets/img/projects/theWildOasis/thewildoasis3.png",
      alt: "the wild oasis project",
    },
  ];
  const smallImages = [
    {
      src: "/assets/img/projects/tarkhine/tarkhine1-s.png",
      alt: "tarkhine project",
    },
    {
      src: "/assets/img/projects/theWildOasis/thewildoasis4-s.png",
      alt: "the wild oasis project",
    },
    {
      src: "/assets/img/projects/worldWise/worldwise3-s.png",
      alt: "world wise project",
    },
    {
      src: "/assets/img/projects/visitouriran/visitouriran-s.png",
      alt: "visit our iran project",
    },
    {
      src: "/assets/img/projects/worldWise/worldwise2-s.png",
      alt: "world wise project",
    },
    {
      src: "/assets/img/projects/tarkhine/tarkhine2-s.png",
      alt: "tarkhine project",
    },
    {
      src: "/assets/img/projects/theWildOasis/thewildoasis3-s.png",
      alt: "the wild oasis project",
    },
  ];

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
        ? bigImages.map((image) => (
            <SwiperSlide key={image.src} className={styles.swiperSlide}>
              <img src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))
        : smallImages.map((image) => (
            <SwiperSlide key={image.src} className={styles.swiperSlide}>
              <img src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
    </Swiper>
  );
}

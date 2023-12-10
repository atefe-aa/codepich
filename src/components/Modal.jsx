// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation } from "swiper/modules";

import styles from "../styles/Modal.module.css";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { Navigate, useParams } from "react-router-dom";
import { PROJECTS } from "../utils/consts";
function Modal() {
  const ref = useOutsideClick(() => history.back(), true);
  const { projectName } = useParams();
  const data = PROJECTS[projectName];

  if (!data) return <Navigate to="/404" replace />;

  const swiperProps = {
    effect: "cards",
    grabCursor: true,
    loop: true,
    modules: [EffectCards, Navigation],
    className: `mySwiper ${styles.swiper}`,
    navigation: true,
  };
  return (
    <div className={styles.modalBox}>
      <div ref={ref} className={styles.swiperBox}>
        <Swiper {...swiperProps}>
          {data.bigImages?.map((image) => (
            <SwiperSlide key={image.id} className={styles.swiperSlide}>
              <img src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Modal;

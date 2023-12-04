
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../styles/swiper.css";

// import required modules
import {  Mousewheel } from "swiper/modules";
import SwiperCardsTest from "../components/SwiperCards";

export default function Test() {
  return (
    <div id="home">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section
            style={{ width: "100vw", height: "100vh", background: "grey" }}
          ></section>
        </SwiperSlide>
        <SwiperSlide>
        <SwiperCardsTest />
        </SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}

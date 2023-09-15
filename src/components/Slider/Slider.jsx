import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export const Slider = ({ item }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="slider_container">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={5}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        direction="horizontal"
        initialSlide={0}
        width={800}
        effect="slide"
        loop={false}
      >
        <SwiperSlide>
          <img src={item.largeImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={5}
        slidesPerView={6}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={item.largeImage} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={item.image_4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-10.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

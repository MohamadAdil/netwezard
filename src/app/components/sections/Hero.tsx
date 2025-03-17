"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

// JSON Data for slides
const heroSlides = [
  {
    id: 1,
    title: "Welcome to NetWezard",
    subtitle: "We create amazing digital experiences",
    description: "Innovative solutions that drive success and growth.",
    image: "/images/slider_img_03.jpg",
    align: "left",
  },
  {
    id: 2,
    title: "Next-Gen Web Development",
    subtitle: "Modern, Fast & Secure",
    description: "Using cutting-edge technologies to build scalable solutions.",
    image: "/images/slider_img_03.jpg",
    align: "right",
  },
  {
    id: 3,
    title: "Your Vision, Our Mission",
    subtitle: "Transforming ideas into reality",
    description: "Let's build something incredible together.",
    image: "/images/slider_img_03.jpg",
    align: "left",
  },
];

const Hero = () => {
  return (
    <section className="hero">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        effect="fade"
        className="swiper"
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="container content">
                <div className="row">
                  <div
                    className={`col-lg-6 d-flex align-items-center ${slide.align === "left" ? "order-lg-1" : "order-lg-2"
                      }`}
                  >
                    <div className="text">
                      <h1 className="animate__animated animate__fadeInUp">
                        {slide.title}
                      </h1>
                      <h2 className="animate__animated animate__fadeInUp animate__delay-1s">
                        {slide.subtitle}
                      </h2>
                      <p className="animate__animated animate__fadeInUp animate__delay-2s">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                  <div
                    className={`col-lg-6 d-none d-lg-block ${slide.align === "left" ? "order-lg-2" : "order-lg-1"
                      }`}
                  ></div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
const images = [
  '/images/brand-img/img-7.png',
  '/images/brand-img/img-2.png',
  '/images/brand-img/img-3.png',
  '/images/brand-img/img-4.png',
  '/images/brand-img/img-5.png',
  '/images/brand-img/img-6.png',
  '/images/brand-img/img-7.png',
  '/images/brand-img/img-2.png',
  '/images/brand-img/img-2.png',
  '/images/brand-img/img-4.png',
];

const BrandSlider = () => {
  return (
    <div className="carouselField">
      <div className="marqueeCarousel">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          slidesPerView={8}
          speed={10000}
          spaceBetween={15}
          resistance
          resistanceRatio={0}
          loop
          allowTouchMove={false}
          breakpoints={{
            0: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 8,
            },
          }}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <Image 
                src={src} 
                alt={`Brand ${index}`} 
                width={374} 
                height={251} 
                style={{ objectFit: 'cover', borderRadius: '20px' }} 
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BrandSlider;

'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { GiRoundStar } from 'react-icons/gi';

const testimonials = [
  {
    name: 'Jaydon Baptista',
    image: '/images/testimonials-img/img-1.png', // Replace with your actual image path
    text: `I cannot express enough how grateful we are for the incredible service and expertise this team has provided. When we first started working with them, we were struggling to get the right audience to notice our brand. They took the time to understand our business.`,
  },
  {
    name: 'Erin Westervelt',
    image: '/images/testimonials-img/img-2.png',
    text: `We are truly beyond grateful for the exceptional service and expertise this team has delivered. When we initially partnered with them, we were struggling to connect with the right audience for our brand. They took the time to deeply understand our business.`,
  },
  {
    name: 'Wilson Franci',
    image: '/images/testimonials-img/img-3.png',
    text: `We are incredibly thankful for the outstanding service and expertise this team has provided. When we first partnered with them, we faced challenges in reaching the right audience for our brand. They invested time in thoroughly understanding our business.`,
  },
  ,
  {
    name: 'Jaydon Baptista',
    image: '/images/testimonials-img/img-4.png',
    text: `I cannot express enough how grateful we are for the incredible service and expertise this team has provided. When we first started working with them, we were struggling to get the right audience to notice our brand. They took the time to understand our business.`,
  },
];

export default function Testimonials() {
  return (
    <div className="w-full TestimonialsSlider ">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="Testimonials-card">
              <div className="user">
                <div className="user-img">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={81}
                    height={81}
                    className="object-fit-cover rounded-full"
                  />
                </div>
                <div>
                  <h6 className="">{item.name}</h6>
                  <div className="ra-star">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <GiRoundStar key={i} size={16} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="">{item.text}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

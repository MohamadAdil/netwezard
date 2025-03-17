"use client";

import { useState } from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Victor Mathieux",
    position: "Co-founder & CEO, TryZenspace.com",
    image: "/img/victor.jpg",
    quote:
      "Dilawar is a pleasure to work with. He's extremely reliable, turns things around quickly and does quality detail-oriented work. I've hired him for over a dozen projects and plan to keep hiring for many more projects.",
  },
  {
    id: 2,
    name: "Katherine Krug",
    position: "",
    image: "/img/katherine.jpg",
    quote:
      "Dilawar is hard working, reliable and great to work with. He has helped develop our Shopify store as well as do a bunch of PSD to HTML/CSS conversions. Looking forward to continuing to work with Dilawar!",
  },
  {
    id: 3,
    name: "Anica John",
    position: "",
    image: "/img/anica-john.jpg",
    quote:
      "Dilawar works fast and is very responsive. It's so easy to work with him, and the product is consistently great!",
  },
];

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h1 className="section-title">Client Testimonials</h1>
        <p>
          Read what our clients say about working with NetWezard in the client testimonials below.
        </p>

        <div className="position-relative">
          <div className="carousel-inner">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`carousel-item ${index === activeIndex ? "active" : "d-none"}`}
              >
                <div className="text-center">
                  <div className="mb-3">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={100}
                      height={100}
                      className="rounded-circle"
                    />
                  </div>
                  <p className="lead">{testimonial.quote}</p>
                  <span className="d-block fw-bold">{testimonial.name}</span>
                  {testimonial.position && <span className="text-muted">{testimonial.position}</span>}
                </div>
              </div>
            ))}
          </div>

          <button
            className="btn btn-outline-dark position-absolute start-0 top-50 translate-middle-y"
            onClick={handlePrev}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="btn btn-outline-dark position-absolute end-0 top-50 translate-middle-y"
            onClick={handleNext}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}

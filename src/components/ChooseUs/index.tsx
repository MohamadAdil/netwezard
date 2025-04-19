"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionTitle from "../Common/SectionTitle";
import SingleChoose from "./SingleChoose";
import ChooseUsData from "./chooseUsData";
import Image from "next/image";

const ChooseUs = () => {
  const firstFourItems = ChooseUsData.slice(0, 3);
  const lastFourItems = ChooseUsData.slice(3);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const zoomInElement = document.querySelector(".ScrollZoomIn");

    const zoomInTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: zoomInElement,
        start: "top 80%",
        end: "bottom center",
        scrub: true,
      },
    });

    zoomInTimeline.fromTo(
      zoomInElement,
      { scale: 0.5 },
      { scale: 1, ease: "power1.out" },
    );
  }, []);

  return (
    <>
      <section id="choose-us" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Why choose us?"
            paragraph="Driving Your Digital Success: Choose Us for Tailored IT Solutions"
            center
          />
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-4/12">
              {firstFourItems.map((choose) => (
                <SingleChoose
                  cstmClass1="ml-4 order-2"
                  cstmClass2="text-end"
                  key={choose.id}
                  choose={choose}
                />
              ))}
            </div>
            <div className="w-full px-4 lg:w-4/12">
              <Image
                src="/images/logo/favicon.svg"
                alt="logo"
                width={434}
                height={462}
                className="ScrollZoomIn w-full"
              />
            </div>
            <div className="w-full px-4 lg:w-4/12">
              {lastFourItems.map((choose) => (
                <SingleChoose
                  cstmClass1="mr-4"
                  cstmClass2="text-start"
                  key={choose.id}
                  choose={choose}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChooseUs;

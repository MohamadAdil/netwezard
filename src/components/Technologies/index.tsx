"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SingleTechnology from "./SingleTechnology";
import technologyData from "./technologyData";

const Technologies = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animation for the first row (move to the right)
    gsap.fromTo(
      "#tectFlowRight .single-technology",
      { x: "-100%", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#technologies",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      },
    );

    // Animation for the second row (move to the left)
    gsap.fromTo(
      "#tectFlowLeft .single-technology",
      { x: "100%", opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: "#technologies",
          start: "top 80%",
          end: "bottom 20%",
          scrub: true,
        },
      },
    );
  }, []);

  const halfLength = Math.ceil(technologyData.length / 2);
  const firstHalf = technologyData.slice(0, halfLength);
  const secondHalf = technologyData.slice(halfLength);

  return (
    <>
      <section
        id="technologies"
        className="md:py-18 bg-gray-light py-16 dark:bg-gray-dark lg:py-24"
      >
        <div className="container-fluide">
          <div className="-mx-4 flex flex-wrap" id="tectFlowRight">
            <div className="w-full px-4">
              <div className="flex items-center justify-center overflow-hidden rounded-sm">
                {firstHalf.map((technology) => (
                  <SingleTechnology
                    key={technology.id}
                    technology={technology}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap" id="tectFlowLeft">
            <div className="w-full px-4">
              <div className="flex items-center justify-center overflow-hidden rounded-sm">
                {secondHalf.map((technology) => (
                  <SingleTechnology
                    key={technology.id}
                    technology={technology}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;

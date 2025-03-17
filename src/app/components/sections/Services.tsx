"use client";

import { Smartphone, Laptop, Code, PenTool, Rocket, Gem } from "lucide-react";
import Image from "next/image";

const servicesData = [
  {
    id: 1,
    title: "Responsive Applications",
    description:
      "We develop stunning websites optimized for mobile devices as well as professional mobile apps.",
    icon: <Smartphone size={48} />,
  },
  {
    id: 2,
    title: "Compatible Websites",
    description:
      "We develop your websites cross-browser compatible with all major browsers according to your need.",
    icon: <Laptop size={48} />,
  },
  {
    id: 3,
    title: "Advanced Technology",
    description:
      "We use advanced technology and industry standards to develop your websites, ensuring the best experience.",
    icon: <Code size={48} />,
  },
  {
    id: 4,
    title: "Ultimate Designs",
    description:
      "We create dazzling and unique designs for your websites and logo to attract the world.",
    icon: <PenTool size={48} />,
  },
  {
    id: 5,
    title: "Professional Writing",
    description:
      "We create engaging professional content for your website at an affordable cost for our clients.",
    icon: <Rocket size={48} />,
  },
  {
    id: 6,
    title: "Quality Products",
    description:
      "We guarantee quality software and provide bug-free products that comply with all functional requirements.",
    icon: <Gem size={48} />,
  },
];

const Services = () => {
  return (
    <section id="services" className="service section-padding">
      <div className="container">
        <div className="text-center">
          <h1 className="section-title">Our Services</h1>
          <p>
            We provide advanced web and mobile solutions, including web design,
            e-commerce, web application development, software testing, and
            content writing for our clients.
          </p>
        </div>

        <div className="row">
          {/* Left Column Services */}
          <div className="col-xs-12 col-sm-5 col-md-5">
            <div className="left-column">
              {servicesData.slice(0, 3).map((service) => (
                <div key={service.id} className="media">
                  <div className="media-left media-middle">{service.icon}</div>
                  <div className="media-body">
                    <h2>{service.title}</h2>
                    <h3>{service.description}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Center Image */}
          <div className="col-xs-6 col-sm-2 col-md-2 hidden-xs">
            <div className="image-box">
              <Image
                src="/images/phn.png"
                alt="Services"
                width={150}
                height={300}
                className="img-responsive"
              />
            </div>
          </div>

          {/* Right Column Services */}
          <div className="col-xs-12 col-sm-5 col-md-5">
            <div className="right-column">
              {servicesData.slice(3, 6).map((service) => (
                <div key={service.id} className="media">
                  <div className="media-left media-middle">{service.icon}</div>
                  <div className="media-body">
                    <h2>{service.title}</h2>
                    <h3>{service.description}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

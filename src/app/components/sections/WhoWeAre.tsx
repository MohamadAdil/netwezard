"use client";

import { Pencil, Laptop, Smartphone, Code } from "lucide-react";

const whoWeAreData = [
  {
    id: 1,
    title: "Innovative Design",
    description:
      "We develop responsive design and web design to suit your brand. We provide excellent logo designs that create a unique business identity and make your product easily recognizable in the overcrowded marketplace.",
    icon: <Pencil size={48} />,
  },
  {
    id: 2,
    title: "Perfect for All",
    description:
      "Mobile phone applications offer the best way for small business owners to reach customers. We design websites that are compatible with all kinds of mobile devices like smartphones, iPads, iPhones, and tablets.",
    icon: <Laptop size={48} />,
  },
  {
    id: 3,
    title: "Application Development",
    description:
      "We have a team of professionals who develop websites as well as mobile applications of supreme quality. At NetWezard, we ensure new heights to your business with our client-focused mobile solutions.",
    icon: <Smartphone size={48} />,
  },
  {
    id: 4,
    title: "Testing Services",
    description:
      "We offer testing services like functional testing, user interface and usability testing, compatibility testing, and responsive testing to provide you with a bug-free product.",
    icon: <Code size={48} />,
  },
];

const WhoWeAre = () => {
  return (
    <section id="about" className="who-we-are section-padding">
      <div className="container">
        <div className="text-center">
          <h1 className="section-title">Who We Are</h1>
          <p>
            We are a team of professional designers, developers, testers, and
            content writers. Our skills match and exceed our client's
            expectations each time. Our team vision drives the efforts of all
            individuals in the organization to create the richest and most
            innovative solutions.
          </p>
        </div>
        <div className="row">
          {whoWeAreData.map((item) => (
            <div key={item.id} className="col-xs-12 col-sm-6 col-md-3 text-center">
              <div className="icon-circle">{item.icon}</div>
              <div className="who-we-are-content text-center">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;

"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand, Share } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "TPASC",
    category: "website",
    img: "/images/slider_img_03.jpg",
    largeImg: "/images/slider_img_03.jpg",
    description: "Mockup Design",
  },
  {
    id: 2,
    title: "CAN YOU MODEL",
    category: "website",
    img: "/images/slider_img_03.jpg",
    link: "http://cym.netwezard.com/",
    description: "Mockup Design, HTML, Responsive",
  },
  {
    id: 3,
    title: "Carplanet",
    category: "website",
    img: "/images/slider_img_03.jpg",
    link: "http://carplanet.netwezard.com",
    description: "Mockup Design, HTML, Responsive",
  },
  {
    id: 4,
    title: "VELOCITY",
    category: "bootstrap",
    img: "/images/slider_img_03.jpg",
    link: "http://velocity.netwezard.com/",
    description: "Bootstrap HTML",
  },
];

const categories = ["all", "website", "bootstrap"];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        <h1 className="mb-3">Our Latest Works</h1>
        <p className="mb-4">
          We make complex things simple and create solutions that work. See our latest business web design portfolios.
        </p>

        {/* Bootstrap Nav Tabs */}
        <ul className="nav nav-tabs justify-content-center mb-4">
          {categories.map((cat) => (
            <li className="nav-item" key={cat}>
              <button
                className={`nav-link ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            </li>
          ))}
        </ul>

        {/* Portfolio Grid */}
        <div className="row">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-md-6 col-lg-4 mb-4">
              <div className="card border-0 shadow-sm">
                <Image src={item.img} alt={item.title} width={400} height={300} className="card-img-top" />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  <div className="d-flex justify-content-center gap-3">
                    <button className="btn btn-outline-dark" onClick={() => setSelectedImage(item.img)}>
                      <Expand size={20} /> View
                    </button>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                        <Share size={20} /> Visit
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="modal fade show d-block" tabIndex="-1" onClick={() => setSelectedImage(null)}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <button className="btn-close position-absolute top-0 end-0 m-3" onClick={() => setSelectedImage(null)} />
              <Image src={selectedImage} alt="Selected Work" width={600} height={400} className="rounded" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

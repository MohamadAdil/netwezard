"use client";

import { useState } from "react";
import Image from "next/image";
import { Expand, Share, X } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "TPASC",
    category: "website",
    img: "/images/slider_img_03.jpg",
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto text-center">
        <h1 className="text-2xl font-semibold mb-4">Our Latest Works</h1>
        <p className="mb-6 text-gray-600">
          We make complex things simple and create solutions that work. See our latest business web design portfolios.
        </p>

        {/* Category Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-md transition ${
                selectedCategory === cat ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <Image src={item.img} alt={item.title} width={400} height={250} className="w-full object-cover" />
              <div className="p-4 text-center">
                <h5 className="text-lg font-medium">{item.title}</h5>
                <p className="text-gray-600 text-sm">{item.description}</p>
                <div className="flex justify-center gap-3 mt-3">
                  <button
                    className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 flex items-center gap-2"
                    onClick={() => setSelectedImage(item.img)}
                  >
                    <Expand size={18} /> View
                  </button>
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center gap-2"
                    >
                      <Share size={18} /> Visit
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg relative">
            <button className="absolute top-2 right-2 text-gray-700 hover:text-black" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <Image src={selectedImage} alt="Selected Work" width={600} height={400} className="rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
}

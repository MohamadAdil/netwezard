"use client";

import { Link, Phone } from "lucide-react";

const CleanIdea = () => {
  return (
    <section id="clean" className="clean-idea section-padding">
      <div className="container">
        <div className="text-center">
          <h1 className="section-title">Clean Idea and Unique Design</h1>
          <p>
            A designer knows he has achieved perfection not when there is
            nothing left to add, but when there is nothing left to take away.
          </p>
          <div className="button-set">
            <button type="button" className="btn btn-danger">
              <Link size={18} className="me-2" />
              Read More
            </button>
            <a href="#contact" className="page-scroll contact-us btn btn-primary">
              <Phone size={18} className="me-2" />
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CleanIdea;

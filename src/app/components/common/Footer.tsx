"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-light py-4">
      <div className="container">
        <div className="row">
          
          {/* Logo & About Section */}
          <div className="col-md-4">
            <Link href="/">
              <Image src="/img/footer-logo.png" alt="NetWezard" width={150} height={50} />
            </Link>
            <p className="mt-2">
              We are available for you 24x7. Fill the form above to find out about our proven success.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#our-work">Our Work</Link></li>
              <li><Link href="#team">Team</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><a href="tel:+919888889964">+91 9888 889 964</a></li>
              <li><a href="mailto:dilawar.ali84@gmail.com">dilawar.ali84@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-4">
          <p>© {new Date().getFullYear()} All rights reserved. NetWezard</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="btn btn-secondary btn-sm"
          >
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
}

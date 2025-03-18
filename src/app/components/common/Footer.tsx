"use client";

import Link from "next/link";
// import Image from "next/image";
import { FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="ft-upper">
          <div className="row">
            <div className="col-lg-6">
              <Link className="navbar-brand" href="#">NET<span>WEZARD</span></Link>
              <p>We are a professional organization providing specialized expertise and advice.</p>
              <div className="row">
                <div className="col-lg-6">
                  <h5>Contact Us</h5>
                  <ul>
                    <li>
                      <Link href="tel:+16035550123">(603) 555-0123</Link>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <h5>Address</h5>
                  <ul>
                    <li>
                      <Link href="#">Chandigarh, India</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <h5>Useful Links</h5>
              <ul>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Services</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <h5>Mail Us</h5>
              <div className="email-container">
                <input type="email" placeholder="Enter your email" className="email-input" />
                <button type="submit" className="submit-btn btn-main">Subscribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="ft-bootm">
          <p>© 2025 NETWEZARD is Proudly Powered by Everbiz</p>
          <div className="ft-social">
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

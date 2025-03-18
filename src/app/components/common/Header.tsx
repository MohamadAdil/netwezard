"use client";

import { useState } from "react";
import Link from "next/link";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="header">
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-wrap">
            <div className="social-link">
              <div>
                <FaMapMarkerAlt />
                <Link href="#">Chandigarh, India</Link>
              </div>
              <div>
                <FaEnvelope />
                <Link href="mailto:info@example.com">info@example.com</Link>
              </div>
              <div>
                <FaPhoneAlt />
                <Link href="tel:+16295550129">(629) 555-0129</Link>
              </div>
            </div>
            <div className="social-media-link">
              <Link href="#"><FaTwitter /></Link>
              <Link href="#"><FaLinkedinIn /></Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-md" aria-label="Fourth navbar example">
        <div className="container">
          <Link className="navbar-brand" href="#">NET<span>WEZARD</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">About Us</Link>
              </li>
              <li className="nav-item dropdown" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                <Link className="nav-link dropdown-toggle" href="#" aria-expanded={dropdownOpen}>Services</Link>
                {dropdownOpen && (
                  <ul className="dropdown-menu show">
                    <li><Link className="dropdown-item" href="#">Web Development</Link></li>
                    <li><Link className="dropdown-item" href="#">UI/UX</Link></li>
                    <li><Link className="dropdown-item" href="#">Website Management</Link></li>
                  </ul>
                )}
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="#">Contact Us</Link>
              </li>
            </ul>
            <div className="header-contact">
              <div className="icon">
                <FaPhoneAlt />
              </div>
              <div>
                <p>Need Help?</p>
                <Link href="#">83838 38388</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
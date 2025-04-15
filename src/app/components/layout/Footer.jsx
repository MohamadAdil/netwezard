'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { IoMdMail } from 'react-icons/io';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="upper-ft">
        <div className="container">
          <div className="site-logo">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="Social Vision logo"
                width={150}
                height={80}
                priority
                className="object-fit-contain"
              />
            </Link>
          </div>
          <div className="cn-wrap">
            <div className="footer-description">
              <p>
                We leverage cutting-edge technology to deliver innovative marketing solutions that drive real results. From AI-powered analytics and automation to advanced digital strategies, we harness the latest tools to optimize campaigns, enhance customer engagement, and maximize ROI.
              </p>
              <div className="social-icon">
                <Link href="https://www.facebook.com" target="_blank">
                  <FaFacebook size={24} />
                </Link>
                <Link href="https://www.instagram.com" target="_blank">
                  <AiFillInstagram size={24} />
                </Link>
                <Link href="https://www.linkedin.com" target="_blank">
                  <FaLinkedin size={24} />
                </Link>
              </div>
            </div>
            <div className="quick-links">
              <h5>Quick Links</h5>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About us</Link></li>
                <li><Link href="/services">Our Services</Link></li>
                <li><Link href="/ai-tech-insights">Our Work</Link></li>
              </ul>
            </div>
            <div className="contact-us">
              <h5>Contact Us</h5>

              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhoneAlt size={20} />
                </div>
                <div>
                  <h6>Call Us:</h6>
                  <Link href="tel:+919888889964">
                    +91 98888 89964
                  </Link>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                  <IoMdMail size={20} />
                </div>
                <div>
                  <h6>Email Us:</h6>
                  <Link href="mailto:Dilawar.ali84@gmail.com">
                    dilawar.ali84@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-ft">
        <div className="container">
          <p>©copyright 2025. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

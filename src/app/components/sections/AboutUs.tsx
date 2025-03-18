'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaBullseye } from 'react-icons/fa';

const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='container'>
        <div className='row'>
          {/* Image Section */}
          <div className='col-lg-6'>
            <div className='img-wrap'>
              <Image src="/images/about.png" alt="About Us" width={500} height={500} />
            </div>
          </div>

          {/* Text Section */}
          <div className='col-lg-6'>
            <div className='text-wrap'>
              <h6>About us</h6>
              <h2>Together, we're shaping the future—join us!</h2>
              <p>
                We are constantly evolving, learning, and enhancing our capabilities, and our
                growth is ongoing. Reaching the milestone of completing 200 projects is a
                testament to our progress.
              </p>

              {/* Feature Cards */}
              <div className='fe-card-wrap'>
                <div className='fe-item'>
                  <div className="fe-card">
                    <FaUser size={24} />
                    <p>Our Commitments</p>
                  </div>
                  <p>Focused on Delivering Exceptional Customer Service</p>
                </div>
                <div className='fe-item'>
                  <div className="fe-card">
                    <FaBullseye size={24} />
                    <p>Mission Statement</p>
                  </div>
                  <p>Committed to Reducing the Stress of Your Project</p>
                </div>
              </div>

              {/* Button */}
              <div className="btn-wrap">
                <Link href="/discovermore" className="btn-main">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

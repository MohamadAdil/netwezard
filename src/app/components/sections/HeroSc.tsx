"use client";
import Link from 'next/link';
import Image from 'next/image';

const HeroSc = () => {
  return (
    <div className="hero-sc">
      <div className="container">
        <div className="hero-wrap">
          <div className="row">
            <div className="col-lg-7">
              <div className="text-wrap">
                <h6>Welcome to Everbiz</h6>
                <h1>Empowering Your Business Growth.</h1>
                <p>
                  Business consulting involves providing expert advice to organizations
                  to help them improve their performance, solve problems, and
                  achieve business objectives.
                </p>
                <div className="btn-wrap">
                  <Link href="/discovermore" className="btn-main">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="hero-img">
                <Image src="/images/hero-img.png" alt="Hero Image" width={500} height={500} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSc;
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { GiRoundStar } from 'react-icons/gi';
import Testimonials from '../common/Testimonials';
import { motion } from 'framer-motion';

const OurTestimonials = () => {
  return (
    <motion.section
      className="OurTestimonials"
      style={{ backgroundImage: 'url(/images/testimonail-bg.png)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.div
          className="heading-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="hd-border-line center">Our Testimonials</span>
          <h2>AI Customer Testimonials</h2>
        </motion.div>

        <motion.div
          className="reviews-wrap"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="avatars">
            <Image src="/images/testimonials-img/img-1.png" alt="User 1" width={55} height={55} />
            <Image src="/images/testimonials-img/img-2.png" alt="User 2" width={55} height={55} />
            <Image src="/images/testimonials-img/img-3.png" alt="User 3" width={55} height={55} />
            <Image src="/images/testimonials-img/img-4.png" alt="User 4" width={55} height={55} />
          </div>

          <div className="rating-info">
            <div className="d-flex align-items-center gap-2">
              <div className="ra-star">
                <GiRoundStar size={20} />
                <GiRoundStar size={20} />
                <GiRoundStar size={20} />
                <GiRoundStar size={20} />
                <GiRoundStar size={20} />
              </div>
              <span className="rating-value">(4.8/5)</span>
            </div>
            <span className="reviews">Based on 1,258 reviews</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Testimonials />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OurTestimonials;

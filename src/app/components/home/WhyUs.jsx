'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const WhyUs = () => {
  return (
    <motion.section
      className="WhyUs"
      style={{ backgroundImage: 'url(/images/whyus-bg.png)' }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
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
          <div className="hd-box">Why Us</div>
          <h2>What We Do</h2>
          <p>
            We provide advanced web and mobile solutions enabling web designing, e-commerce, web application development, software and web applications testing and content writing to our clients.
          </p>
        </motion.div>

        <div className="whyus-card">
          <div className="row">
            {[
              {
                title: 'Website Design & Development',
                img: '/images/whyus-card-img/img-1.png',
                desc: 'We craft custom, responsive websites tailored to your business needs, ensuring a strong online presence.',
              },
              {
                title: 'Mockup & UI/UX Design',
                img: '/images/whyus-card-img/img-2.png',
                desc: 'Our team designs intuitive and engaging mockups, focusing on user experience to captivate your audience.',
              },
              {
                title: 'Search Engine Optimization (SEO)',
                img: '/images/whyus-card-img/img-3.png',
                desc: 'Enhance your website’s visibility on search engines with our comprehensive SEO strategies.',
              },
            ].map((item, index) => (
              <motion.div
                className="col-md-4 mb-md-0 mb-5"
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="whyus-card-item">
                  <div className="whyus-card-img">
                    <Image
                      src={item.img}
                      width={38}
                      height={38}
                      alt={item.title}
                      className="object-fit-cover"
                    />
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="whyus-btm-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          Not sure what service is right for you?{' '}
          <Link href="#">discover</Link> and let’s figure it out together.
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyUs;

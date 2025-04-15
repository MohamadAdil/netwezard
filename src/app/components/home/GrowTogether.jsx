'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const GrowTogether = () => {
  return (
    <motion.section
      className="GrowTogether"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <motion.div
          className="GrowTogether-wrap"
          style={{ backgroundImage: 'url(/images/grow-bg.png)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2>Let’s Grow Together</h2>
          <p>
            A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.
          </p>
          <Link href="/contact" className="btn-main">
            Contact us
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default GrowTogether;

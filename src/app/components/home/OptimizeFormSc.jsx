"use client";

import OptimizeForm from "./OptimizeForm";
import { motion } from "framer-motion";

const OptimizeFormSc = () => {
  return (
    <motion.section
      className="OptimizeFormSc"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Optimize Strategy with AI
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Receive a tailored AI analysis of your social media presence and advertising efforts.
          This in-depth evaluation will provide insights into how your content and ads are performing,
          helping you identify areas for improvement and optimize your strategy for better engagement and results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <OptimizeForm />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OptimizeFormSc;

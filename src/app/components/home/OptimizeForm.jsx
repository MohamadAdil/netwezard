'use client';
import React from 'react';
import { motion } from 'framer-motion';

const OptimizeForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <motion.div
      className="OptimizeForm"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-12  mb-3">
            <label htmlFor="brandName" className="form-label">Brand Name</label>
            <input
              type="text"
              className="form-control"
              id="brandName"
              placeholder="Enter Brand Name"
              required
            />
          </div>
          <div className="col-md-6 col-sm-12 mb-3">
            <label htmlFor="instagram" className="form-label">Instagram Link</label>
            <input
              type="url"
              className="form-control"
              id="instagram"
              placeholder="Enter Instagram Link"
            />
          </div>
          <div className="col-md-6 col-sm-12 mb-3">
            <label htmlFor="facebook" className="form-label">Facebook</label>
            <input
              type="url"
              className="form-control"
              id="facebook"
              placeholder="Enter Facebook Link"
            />
          </div>
          <div className="col-md-6 col-sm-12 mb-3">
            <label htmlFor="website" className="form-label">Website Link</label>
            <input
              type="url"
              className="form-control"
              id="website"
              placeholder="Enter Website Link"
            />
          </div>
          <div className="col-md-6 col-sm-12 mb-4">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              required
            />
          </div>
          <div className="col-md-12 col-sm-12 text-center">
            <button type="submit" className="btn-main">
              Get My Free Report
            </button>
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default OptimizeForm;

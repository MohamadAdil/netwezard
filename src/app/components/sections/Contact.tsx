"use client";

import { useState } from "react";
import { Mail, MessageSquareText, Smartphone, User } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("Message sent successfully!");
      setFormData({ fullName: "", mobile: "", email: "", subject: "", message: "" });

      setTimeout(() => setStatus(""), 3000); // Clear success message after 3 seconds
    } else {
      setStatus("Error sending message. Try again.");
    }
  };

  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <User className="text-gray-500 mr-2" />
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full p-2 outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <Smartphone className="text-gray-500 mr-2" />
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full p-2 outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <Mail className="text-gray-500 mr-2" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 outline-none bg-transparent"
          />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <MessageSquareText className="text-gray-500 mr-2" />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-2 outline-none bg-transparent"
          />
        </div>

        <div className="border border-gray-300 rounded-md p-2">
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-2 outline-none bg-transparent resize-none"
          ></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>

      {status && <p className="mt-4 text-center text-green-600">{status}</p>}
    </section>
  );
}

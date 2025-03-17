"use client";

import { useState } from "react";
import { Mail, MessageSquareText, Smartphone, User } from "lucide-react";

interface FormData {
  fullName: string;
  mobile: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ fullName: "", mobile: "", email: "", subject: "", message: "" });

        setTimeout(() => setStatus(""), 3000);
      } else {
        setStatus("Error sending message. Try again.");
      }
    } catch (error) {
      setStatus("An unexpected error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {[
          { name: "fullName", placeholder: "Full Name", Icon: User, type: "text" },
          { name: "mobile", placeholder: "Mobile Number", Icon: Smartphone, type: "text" },
          { name: "email", placeholder: "Email", Icon: Mail, type: "email" },
          { name: "subject", placeholder: "Subject", Icon: MessageSquareText, type: "text" },
        ].map(({ name, placeholder, Icon, type }) => (
          <div key={name} className="flex items-center border border-gray-300 rounded-md p-2">
            <Icon className="text-gray-500 mr-2" />
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={formData[name as keyof FormData]}
              onChange={handleChange}
              required
              className="w-full p-2 outline-none bg-transparent"
            />
          </div>
        ))}

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

        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-md ${loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status && <p className="mt-4 text-center text-green-600">{status}</p>}
    </section>
  );
}

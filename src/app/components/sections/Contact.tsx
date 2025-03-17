"use client";

import { Mail, MessageSquareText, Smartphone, User } from "lucide-react";

export default function ContactForm() {
  return (
    <section className="p-6 bg-gray-100 rounded-lg shadow-lg max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center">Get in Touch</h2>
      <form className="space-y-4">
        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <User className="text-gray-500 mr-2" />
          <input type="text" name="fullName" placeholder="Full Name" className="w-full p-2 outline-none bg-transparent" />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <Smartphone className="text-gray-500 mr-2" />
          <input type="text" name="mobile" placeholder="Mobile Number" className="w-full p-2 outline-none bg-transparent" />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <Mail className="text-gray-500 mr-2" />
          <input type="email" name="email" placeholder="Email" className="w-full p-2 outline-none bg-transparent" />
        </div>

        <div className="flex items-center border border-gray-300 rounded-md p-2">
          <MessageSquareText className="text-gray-500 mr-2" />
          <input type="text" name="subject" placeholder="Subject" className="w-full p-2 outline-none bg-transparent" />
        </div>

        <div className="border border-gray-300 rounded-md p-2">
          <textarea name="message" placeholder="Message" className="w-full p-2 outline-none bg-transparent resize-none"></textarea>
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
          Send Message
        </button>
      </form>
    </section>
  );
}

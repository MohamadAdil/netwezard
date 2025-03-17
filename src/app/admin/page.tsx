"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: "",
        mobileNo: "",
        email: "",
        subject: "",
        message: "",
    });

    const [message, setMessage] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");

        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const result = await response.json();
        if (response.ok) {
            setMessage("Form submitted successfully!");
            setFormData({ fullName: "", mobileNo: "", email: "", subject: "", message: "" });
        } else {
            setMessage(result.error || "Error sending message. Try again.");
        }
    };

    return (
        <div>
            <h1>Contact Us</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
                <input type="text" name="mobileNo" placeholder="Mobile No" value={formData.mobileNo} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} required />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

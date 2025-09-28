import React, { useState } from "react";

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would handle form submission to a backend here
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });

    // Reset submission status after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Have questions or need assistance? We're here to help you succeed in your test preparation journey.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6 h-fit">
            <h2 className="text-2xl font-semibold text-gray-100 mb-6">Contact Information</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-green-700 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-100">Email Us</h3>
                  <p className="text-gray-300">support@testprep.com</p>
                  <p className="text-gray-300">info@testprep.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-100">Call Us</h3>
                  <p className="text-gray-300">+91-9876543210</p>
                  <p className="text-gray-300">+91-9123456789</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-700 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-green-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-100">Visit Us</h3>
                  <p className="text-gray-300">123 Education Street</p>
                  <p className="text-gray-300">Jaipur, Rajasthan 302001</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-700 p-3 rounded-full mr-4">
                  <svg className="w-6 h-6 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium text-gray-100">Business Hours</h3>
                  <p className="text-gray-300">Monday-Friday: 9am - 6pm</p>
                  <p className="text-gray-300">Saturday: 10am - 4pm</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-medium text-gray-100 mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {/* Facebook SVG */}
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {/* Twitter SVG */}
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {/* LinkedIn SVG */}
                </a>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  {/* WhatsApp SVG */}
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-100 mb-6">Send us a Message</h2>

            {isSubmitted && (
              <div className="bg-green-700 border border-green-500 text-green-100 px-4 py-3 rounded mb-4">
                <p>Thank you for your message! We'll get back to you soon.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {["name", "email", "subject"].map((field) => (
                <div key={field}>
                  <label htmlFor={field} className="block text-sm font-medium text-gray-300 mb-1 capitalize">
                    {field.replace(/^\w/, c => c.toUpperCase())}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    id={field}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                    placeholder={field === "subject" ? "What is this regarding?" : `Your ${field}`}
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-2 border border-gray-600 rounded-lg bg-gray-900 text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="h-64 w-full bg-gray-700 flex items-center justify-center">
            <div className="text-center">
              <svg className="w-16 h-16 text-gray-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-gray-400 mt-2">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ContactUs;
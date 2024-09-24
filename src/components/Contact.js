import React, { useState } from 'react';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="py-20 bg-gradient-purple" id="contact">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Get In Touch</h2>
        <form
          className="max-w-3xl mx-auto bg-white bg-opacity-10 backdrop-blur-[50px] border border-gray-200 border-opacity-50 p-8 rounded-lg shadow-2xl transition-transform transform hover:scale-105"
          action="https://formspree.io/f/myzgqvwb"
          method="POST"
        >
          <div className="mb-4">
            <label className="block text-white font-semibold tracking-wide" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-3 bg-transparent border border-gray-200 border-opacity-50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-semibold tracking-wide" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 bg-transparent border border-gray-200 border-opacity-50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-white font-semibold tracking-wide" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-3 bg-transparent border border-gray-200 border-opacity-50 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-gradient-to-l hover:from-indigo-500 hover:to-blue-500 transition-all duration-300">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

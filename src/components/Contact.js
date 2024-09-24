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
        <h2 className="text-3xl font-bold text-center mb-10">Get In Touch</h2>
        <form
          className="max-w-3xl mx-auto"
          action="https://formspree.io/f/myzgqvwb"
          method="POST"
        >
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-3 border border-gray-300 rounded-lg"
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg"
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-400">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

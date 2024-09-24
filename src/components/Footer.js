import React from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-10">
      <div className="max-w-6xl mx-auto text-center text-white">
        <div className="mb-6 flex justify-center space-x-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 transition-colors duration-300"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition-colors duration-300"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500 transition-colors duration-300"
          >
            <FaWhatsapp size={24} />
          </a>
        </div>
        <p>&copy; 2024 WebAlchemists. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;


import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Install react-icons if not installed

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+918693895363?text=Hello"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-5 z-50 bg-gradient-purple  text-white p-4 rounded-full border-black  shadow-xl hover:text-green-300 transition duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;

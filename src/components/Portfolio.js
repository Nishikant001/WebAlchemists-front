import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import gym from "../assets/portfolio/gym.png";
import webmaster from "../assets/portfolio/webmaster.png";
import food from "../assets/portfolio/fastfood.png";

const portfolioItems = [
  { img: gym, title: 'Monster Gym' },
  { img: webmaster, title: 'WebMasters Learning' },
  { img: food, title: `Brother's Fastfood` }
];

const Portfolio = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once when scrolled into view
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-purple" id='portfolio'>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-200 text-center mb-12" data-aos="fade-up">
          Our Portfolio
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {portfolioItems.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:-translate-y-2"
              data-aos="fade-up" // Animation type
              data-aos-delay={idx * 200} // Staggered delay for animation
            >
              {/* Image with parallax effect */}
              <div className="relative overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-60 object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Overlay content */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

              {/* Text content */}
              <div className="absolute bottom-0 left-0 w-full p-6 text-center z-10">
                <h3 className="text-2xl font-semibold text-white transition-colors duration-500 group-hover:text-yellow-300">
                  {item.title}
                </h3>
              </div>

              {/* Hover border and shadow effect */}
              <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-gradient-to-r group-hover:from-purple-500 group-hover:to-pink-500 group-hover:shadow-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

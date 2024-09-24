import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

import web from "../assets/service/web.avif";
import web1 from "../assets/service/ui.jpeg";
import web2 from "../assets/service/seo.jpg";
import web3 from "../assets/service/app.webp";

const services = [
  {
    title: "Web Development",
    description: "Modern web development solutions using React and more.",
    image: web,
  },
  {
    title: "UI/UX Design",
    description: "Professional and clean design for your applications.",
    image: web1,
  },
  {
    title: "SEO Optimization",
    description: "Boost your website's visibility on search engines.",
    image: web2,
  },
  {
    title: "App Development",
    description: "Modern app development solutions using React and more.",
    image: web3,
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Only animate once when scrolled into view
    });
  }, []);

  return (
    <section className="py-20 bg-gradient-purple" id='service'>
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-gray-200 mb-12" data-aos="fade-up">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 duration-500"
              data-aos="fade-up" // AOS animation for each card
              data-aos-delay={idx * 200} // Delay animation for staggered effect
            >
              {/* Service Image */}
              <div className="relative w-full h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-500"></div>
              </div>

              {/* Service Content */}
              <div className="absolute inset-x-0 bottom-0 p-6 z-10 text-left bg-white bg-opacity-80 backdrop-blur-lg group-hover:bg-opacity-90 transition duration-500">
                <h3 className="text-2xl font-semibold text-gray-900 group-hover:text-[#7F00FF] transition-colors duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-700 group-hover:text-[#7F00FF] transition-colors duration-500">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

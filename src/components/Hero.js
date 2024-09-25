import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Hero = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: false,     // Whether animation should happen only once
    });
  }, []);

  return (
    <section className="bg-gradient-purple text-center py-20" id="home">
      <div className="max-w-6xl mx-auto pt-24">
        <h1
          className="text-4xl font-bold text-white"
          data-aos="fade-up" // AOS animation type
        >
          Bring Your Ideas to Life with Us
        </h1>
        <p
          className="text-gray-200 mt-4 text-lg"
          data-aos="fade-up"
          data-aos-delay="200" // Delay the animation
        >
          Professional freelance services to boost your business.
        </p>
        <a
          href="#service"
          className="mt-6 inline-block bg-gradient-dark text-white py-3 px-6 rounded hover:bg-blue-400"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default Hero;

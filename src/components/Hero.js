import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-purple text-center py-20" id='home'>
      <div className="max-w-6xl mx-auto pt-24">
        <h1 className="text-4xl font-bold text-gray-800">Bring Your Ideas to Life with Us</h1>
        <p className="text-gray-600 mt-4 text-lg">Professional freelance services to boost your business.</p>
        <a href="#service" className="mt-6 inline-block bg-gradient-dark text-white py-3 px-6 rounded hover:bg-blue-400">
          Explore Services
        </a>
      </div>
    </section>
  );
};

export default Hero;

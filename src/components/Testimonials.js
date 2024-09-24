import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';
import rohit from "../assets/clinent/rohit.jpg";
import gudu from "../assets/clinent/Nishi.jpg";

const testimonials = [
  {
    name: "Rohit (Brother's Fastfood)",
    feedback: "Amazing service and quality work!",
    photo: rohit, // Path to John's photo
  },
  {
    name: "Gudu (Webmasters Learning)",
    feedback: "Highly professional and delivered on time.",
    photo: gudu, // Path to Jane's photo
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-purple">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900  mb-10">What Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-lg shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500"
            >
              {/* Client Photo */}
              <div className="flex justify-center mb-6">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 object-cover rounded-full border-4 border-yellow-300 shadow-md"
                />
              </div>

              {/* Quote Icon */}
              <div className="flex justify-center mb-4">
                <FaQuoteLeft className="text-3xl text-white opacity-70 group-hover:text-yellow-300 transition-colors duration-300" />
              </div>

              {/* Testimonial Feedback */}
              <p className="text-gray-100 text-lg italic mb-6 transition-colors duration-300 group-hover:text-white">
                "{testimonial.feedback}"
              </p>

              {/* Client Name */}
              <h4 className="text-xl font-bold text-yellow-300 transition-colors duration-300 group-hover:text-white">
                {testimonial.name}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

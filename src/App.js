import './App.css';

import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Wow from "./components/wow/Wow";
import WhatsAppButton from './components/WhatsAppButton';


function App() {
  const [bubbles, setBubbles] = useState([]);

  // Function to generate a random bubble size, position, and animation duration
  const generateBubble = () => {
    return {
      id: Math.random(),
      size: Math.random() * 100 + 20, // Bubble size between 20 and 120px
      left: Math.random() * 100, // Bubble horizontal position between 0% and 100%
      animationDuration: Math.random() * 5 + 5, // Duration between 5s and 10s
    };
  };

  // Generate bubbles every second
  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles((prevBubbles) => [...prevBubbles, generateBubble()]);
    }, 8000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, []);

  // Handle bubble click (pop the bubble)
  const handleBubbleClick = (id) => {
    // Remove the bubble after a "pop" animation
    setBubbles((prevBubbles) =>
      prevBubbles.map((bubble) =>
        bubble.id === id ? { ...bubble, popped: true } : bubble
      )
    );
    setTimeout(() => {
      setBubbles((prevBubbles) =>
        prevBubbles.filter((bubble) => bubble.id !== id)
      );
    }, 300); // Time for the pop animation to finish
  };

  return (
    <div className="App">
      {/* Falling bubbles in the background */}
      <div className="bubble-container">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={`bubble ${bubble.popped ? 'pop' : ''}`}
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              animationDuration: `${bubble.animationDuration}s`,
            }}
            onClick={() => handleBubbleClick(bubble.id)}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="content">
        <Wow />
        <Navbar />
        <Hero />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
        <WhatsAppButton/>
        <Footer />
      </div>
    </div>
  );
}

export default App;

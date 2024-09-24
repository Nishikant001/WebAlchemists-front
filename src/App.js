
import './App.css';

import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Wow from "./components/wow/Wow";


function App() {
  return (
    <div className="App bg-gradient-purple">
      <Wow/>
      
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
   
    </div>
  );
}

export default App;




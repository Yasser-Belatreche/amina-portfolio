import React from 'react';
import Hero from './sections/heroSection/Hero';
import About from './sections/aboutSection/About';
import Services from './sections/servicesSecion/Services';
import Projects from './sections/projectsSection/Projects';
import Resume from './sections/resumeSection/Resume';
import Testimonials from './sections/testimonialsSection/Testimonials';
import FAQ from './sections/faqSection/FAQ';
import Contact from './sections/contactSection/Contact';

const Container = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Resume />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  )
}

export default Container;
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import NavBar from './sections/navbar/Navbar';
import Hero from './sections/heroSection/Hero';
import About from './sections/aboutSection/About';
import Services from './sections/servicesSecion/Services';
import Projects from './sections/projectsSection/Projects';
import Resume from './sections/resumeSection/Resume';
import Testimonials from './sections/testimonialsSection/Testimonials';
import FAQ from './sections/faqSection/FAQ';
import Contact from './sections/contactSection/Contact';
import Footer from './sections/footerSection/Footer';
import AllProjects from './sections/projectsSection/AllProjectsPage';

const Container = () => {
  return (
    <Switch>
      <Route exact path="/">
        <>
          <NavBar />
          <Hero />
          <About />
          <Services />
          <Projects />
          <Resume />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
        </>
      </Route>
      <Route path="/all-projects">
        <AllProjects />
        <Footer />
      </Route>
    </Switch>
  )
}

export default Container;
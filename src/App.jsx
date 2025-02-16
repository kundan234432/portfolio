import React, { lazy, Suspense } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import GlobalStyles from "./components/GlobalStyles";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import { Element } from "react-scroll"; // Import for scrolling functionality

// Lazy-loaded components
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Hero = lazy(() => import("./pages/Hero"));
const Project = lazy(() => import("./pages/Project"));

const Container = styled.div`
  text-align: center;
  padding: 20px;
`;

const Section = styled(motion.div)`
  margin-bottom: 50px;
`;

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Sidebar />
      <Navbar />
      <RightSidebar />
     
      <Container>
        <Suspense fallback={<h2>Loading...</h2>}>
          {/* Each section has an ID to allow smooth scrolling */}
          <Element name="about">
            <Section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <About />
            </Section>
          <Element name="hero">
            <Section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Hero />
            </Section>
          </Element>
          
          </Element>
          
          <Element name="projects">
            <Section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Project />
            </Section>
          </Element>
          
          <Element name="contact">
            <Section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Contact />
            </Section>
          </Element>
        </Suspense>
      </Container>
    </>
  );
}

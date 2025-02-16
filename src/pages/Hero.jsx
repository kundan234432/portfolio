import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImage from "../assets/images/pic.jpg"; // Image source

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section id="about" className="about-section container py-5">
      <div className="row align-items-center">
        {/* Left Section (Text) */}
        <motion.div
          className="col-md-6"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="section-title">
            <span className="section-number">01.</span> About Me
          </h2>
          <p>
            Hello! My name is <strong>Kundan Kumar</strong> and I enjoy creating things that live on the internet.
            My interest in web development started back in 2022 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
          </p>
          <p>
            Fast-forward to today, I’ve had the privilege of working at
            <span className="highlight"> an advertising agency, a start-up, a huge corporation,</span>
            and <span className="highlight">a student-led design studio</span>. My main focus these days is building accessible, inclusive products and digital experiences at <span className="highlight">Upstatement</span> for a variety of clients.
          </p>
          <p>
            I also recently <span className="highlight">launched a course</span> that covers everything you need to build a web app with the Spotify API using Node & React.
          </p>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="col-md-6 text-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div
            className="about-image-wrapper"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              src={profileImage}
              alt="Kundan Kumar"
              className="about-image img-fluid rounded-circle shadow-lg"
              style={{
                width: "300px",
                height: "300px",
                transition: "transform 0.3s ease-in-out",
                transform: isHovered ? "scale(1.1)" : "scale(1)",
                border: "4px solid #64ffda"
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

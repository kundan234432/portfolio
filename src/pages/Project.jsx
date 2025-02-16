import React from "react";
import nexthirePic from "../assets/images/nexthire-pic.png"; // Ensure correct path
import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0a192f;
  padding: 50px;
  color: white;
  flex-wrap: wrap;
  gap: 30px; /* Adds spacing between elements in mobile view */
`;

const ImageContainer = styled(motion.div)`
  flex: 1.3;
  max-width: 650px;
  margin-right: 40px; /* Added margin to separate from content */

  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    max-width: 90%;
    margin-right: 0; /* Remove margin on small screens */
  }
`;

const Content = styled(motion.div)`
  flex: 1;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  text-align: left;
`;

const ButtonsContainer = styled(motion.div)`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

const Button = styled(motion.a)`
  padding: 10px 20px;
  border: 2px solid #64ffda;
  color: #64ffda;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s ease;

  &:hover {
    box-shadow: 4px 4px 0px #64ffda;
  }
`;

export default function Project() {
  return (
    <Container>
      {/* Image Animation from Left */}
      <ImageContainer
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={nexthirePic}
          alt="nextHire Project Preview"
          loading="lazy" // Optimized loading
        />
      </ImageContainer>

      {/* Content Animation from Right */}
      <Content
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h4>Featured Project</h4>
        <h2>nextHire - Job Board</h2>
        <p>
          nextHire is a fully responsive job board website that allows users to explore job 
          opportunities, upload CVs, post job openings, and access various resources.
        </p>

        {/* Buttons appear after 2 seconds */}
        <ButtonsContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <Button
            href="https://github.com/kundan234432/nextHire"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View nextHire project on GitHub"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            View on GitHub
          </Button>
          <Button
            href="https://gleeful-tiramisu-032d63.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View live demo of nextHire project"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Live Demo
          </Button>
        </ButtonsContainer>
      </Content>
    </Container>
  );
}

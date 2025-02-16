import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
`;

const Heading = styled(motion.h2)`
  font-size: 18px;
  color: #64ffda;
  margin-bottom: 10px;
`;

const Title = styled(motion.h1)`
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #ffffff;
`;

const Description = styled(motion.p)`
  max-width: 600px;
  font-size: 18px;
  color: #a8b2d1;
  line-height: 1.5;
  margin-bottom: 30px;
`;

const Button = styled(motion.a)`
  padding: 12px 30px;
  border: 2px solid #64ffda;
  background: transparent;
  color: #64ffda;
  border-radius: 5px;
  font-size: 16px;
  transition: 0.3s ease;
  text-align: center;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    box-shadow: 4px 4px 0px #64ffda;
  }
`;

export default function Contact() {
  return (
    <Section>
      <Heading 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        04. What's Next?
      </Heading>
      
      <Title 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Get In Touch
      </Title>
      
      <Description 
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1, ease: "easeOut" }}
      >
        I’m always open to new opportunities and exciting challenges. 
        Whether you have a question or just want to connect, feel free to reach out. 
        I’ll do my best to get back to you soon!
      </Description>
      
      <Button 
        href="mailto:kundan234432@gmail.com"
        initial={{ opacity: 0, scale: 0.5 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 1.2, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
      >
        Say Hello
      </Button>
    </Section>
  );
}

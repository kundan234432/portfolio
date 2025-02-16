import React, { useState } from "react";
import { Link } from "react-scroll"; // Import scroll functionality
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";
import resume from "../assets/Static/Resume.pdf";
import "../assets/css/header.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="navbar navbar-expand-md fixed-top"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" className="logo" />
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="navbar-toggler"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

        {/* Navigation Links */}
        <div className={`navbar-collapse ${menuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {[
              { to: "hero", label: "01. Home" },
              { to: "about", label: "02. About" },
              { to: "projects", label: "03. Projects" },
              { to: "contact", label: "04. Contact" },
            ].map((item, index) => (
              <motion.li
                key={item.to}
                className="nav-item"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 * (index + 1), duration: 0.5 }}
              >
                <Link
                  className="nav-link"
                  to={item.to}
                  smooth={true}
                  duration={800}
                  spy={true}
                  offset={-70} // Adjust for navbar height
                >
                  {item.label}
                </Link>
              </motion.li>
            ))}
            {/* Resume Button */}
            <motion.li
              className="nav-item"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <a className="resume-btn nav-link" href={resume} download="Resume.pdf">
                Resume
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

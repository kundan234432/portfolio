import React from "react";
import "./sidebar.css"; // Import CSS

export default function LeftSidebar() {
  return (
    <div className="left-sidebar">
      {/* GitHub */}
      <a href="https://github.com/kundan234432" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/github.svg" alt="GitHub" />
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/kundan-kumar-838959252/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/linkedin.svg" alt="LinkedIn" />
      </a>

      {/* LeetCode */}
      <a href="https://leetcode.com/u/BitMaster_99/" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/leetcode.svg" alt="LeetCode" />
      </a>

      {/* CodePen */}
      <a href="https://codepen.io/liwywrpf-the-scripter" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/codepen.svg" alt="CodePen" />
      </a>

      {/* Twitter */}
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/twitter.svg" alt="Twitter" />
      </a>

      {/* Instagram */}
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v7/icons/instagram.svg" alt="Instagram" />
      </a>

      {/* Vertical Line */}
      <div className="vertical-line"></div>
    </div>
  );
}

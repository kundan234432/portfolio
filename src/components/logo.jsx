import React from "react";

const Logo = () => {
  return (
    <div style={styles.logoContainer}>
      <div style={styles.hexagon}>
        <span style={styles.text}>KD</span>
      </div>
    </div>
  );
};

// CSS Styles
const styles = {
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  hexagon: {
    width: "60px",
    height: "35px",
    backgroundColor: "#2C3E50",
    position: "relative",
    textAlign: "center",
    lineHeight: "35px",
    color: "#1ABC9C",
    fontSize: "18px",
    fontWeight: "bold",
    clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
    border: "2px solid #1ABC9C",
  },
  text: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

// ✅ **Make Logo Resizable**
styles["@media (max-width: 768px)"] = {
  hexagon: {
    width: "50px",
    height: "30px",
    fontSize: "16px",
  },
};

export default Logo;

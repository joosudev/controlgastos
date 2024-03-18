import React from "react";
import "../index.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>
        Josudev - Este proyecto está bajo la Licencia MIT &copy; {currentYear}
      </p>
      <a href="https://github.com/tu-usuario/tu-repositorio" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/material-rounded/48/ffffff/github.png" alt="GitHub" style={{ width: '48px', height: '48px' }} />
      </a>
    </footer>
  );
};

export default Footer;


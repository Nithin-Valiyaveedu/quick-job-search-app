import React from "react";
import "../App.css"
import {Navbar} from "react-bootstrap";
const Footer = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" variant="dark" fixed="bottom">
        <div className="footer-content">
            Find and apply for jobs quickly
        </div>
      </Navbar>
    </div>
  );
};

export default Footer;

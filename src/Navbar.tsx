import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Navbar.css";

function Navbar() {
  return (
    <Row className="justify-content-center mb-5">
      <Col className="mr-5" xs="auto">
        <h2 className="m-0">PIXY</h2>
        <p>
          pixels <span className="brandSpan">x</span> yield
        </p>
      </Col>
      <Col className="mx-5 d-flex align-items-center" xs="auto">
        <ul className="navbarLinks d-flex">
          <li>Home</li>
          <li>Catalog</li>
          <li>How it Works</li>
          <li>Governance</li>
          <li>Launch Project</li>
        </ul>
      </Col>
      <Col className="ml-5" xs="auto">
        <button className="navbarButton">Connect Wallet</button>
      </Col>
    </Row>
  );
}

export default Navbar;

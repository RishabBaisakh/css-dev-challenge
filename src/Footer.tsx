import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container className="pt-5">
        <Row className="mb-5">
          <Col>
            <h2>PIXY</h2>
          </Col>
          <Col xs={2}>
            <Row>
              <Col className="icon" xs="auto"></Col>
              <Col xs="auto">
                <p>Follow us on twitter</p>
              </Col>
            </Row>
          </Col>
          <Col xs={2}>
            <Row>
              <Col className="icon" xs="auto"></Col>
              <Col xs="auto">
                <p>Read on Medium</p>
              </Col>
            </Row>
          </Col>
          <Col xs={2}>
            <Row>
              <Col className="icon" xs="auto"></Col>
              <Col xs="auto">
                <p>Join our Discord</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center">© 2022 Pixy. All rights reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;

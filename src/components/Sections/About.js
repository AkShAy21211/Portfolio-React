import React from "react";
import "../../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/image.png";

function About() {
  return (
   <Container>
      <Row>
        <Col>
          <section id="about" className="intro-about">
            <div className="about">
            <h2 className="fs-1 fw-bold">About</h2>
            <p className="fs-5">
            <hr className="w-25 text-warning" /> As a MERN stack developer, I thrive on crafting dynamic and responsive web applications.
             With a passion for creating seamless user experiences, I specialize in leveraging the power of MongoDB, 
             Express.js, React.js, and Node.js to build robust and scalable solutions. From conceptualization to deployment, 
            <span className="text-warning"> I am committed to delivering high-quality code that meets the unique needs of each project. </span>
             Whether it's implementing RESTful APIs, optimizing database performance, or crafting intuitive user interfaces,
              I am dedicated to exceeding expectations and driving innovation in the ever-evolving world of web development.

</p>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  )
}

export default About

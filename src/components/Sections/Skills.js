import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../cards/Card";

// Import skill images
import bootstrap from "../../assets/bootstrap.png";
import css from "../../assets/css3.png";
import dns from "../../assets/dns.png";
import github from "../../assets/github.png"; // Fixed typo
import hosting from "../../assets/hosting.png";
import aws from "../../assets/aws.png";
import javascript from "../../assets/javascript.png";
import mongodb from "../../assets/mongodb.png";
import nodejs from "../../assets/nodejs.png";
import react from "../../assets/react.png";
import redux from "../../assets/redux.png";
import typescript from "../../assets/typescript.png";
import docker from "../../assets/docker.png";
import figma from "../../assets/figma.png";
import postman from "../../assets/postman.png";
import nextjs from "../../assets/nextjs.png";

function Skills() {
  const skillsData = [
    { image: javascript, title: "JavaScript" },
    { image: mongodb, title: "MongoDB" },
    { image: nodejs, title: "Node.js" },
    { image: react, title: "React" },
    { image: nextjs, title: "Nextjs" },
    { image: bootstrap, title: "Bootstrap" },
    { image: css, title: "CSS3" },
    { image: dns, title: "DNS" },
    { image: figma, title: "Figma" },
    { image: postman, title: "Postman" },
    { image: github, title: "GitHub" },
    { image: docker, title: "Docker" },
    { image: aws, title: "AWS" },
    { image: redux, title: "Redux" },
    { image: typescript, title: "TypeScript" },
  ];

  return (
    <Container>
      <section id="skills">
        <h2 className="text-center mt-5 fs-1 fw-bold">My Skills</h2>
        <Row>
          {skillsData.map((skill, index) => (
            <Col key={index} xs={12} sm={6} md={4} lg={3} xl={3}>
              <Card
                para={false}
                btn={false}
                image={skill.image}
                title={skill.title}
              />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  );
}

export default Skills;

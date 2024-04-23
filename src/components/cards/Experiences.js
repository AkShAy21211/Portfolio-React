import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Experiences() {
  return (
    <>
      <h1 className="text-start mt-5 mx-5 exp-title fw-bold" >Experience</h1>
      <section id="experience">
        <Container>
          <Row>
            <Col xs={1} sm={1} className="mt-5">
              <div className="exp-year " >2023  </div>
            </Col>
            <Col xs={1} sm={1} className="mt-5 ">
              <div className="exp-glow" style={{ backgroundColor: "#f39c12" }}></div>
              <div className="exp-bar" style={{ backgroundColor: "#f39c12" }}></div>
            </Col>
            <Col xs={10} sm={10} className="mt-5">
              <div className="exp-info ">
                <h2 style={{ color: "#2980b9" }}>Web Developer Intern</h2>
                <h6 >
                  Brototype <span>2023 </span>
                </h6>
                <p style={{ color: "#7f8c8d" }}>
                 In the bootcamp, I immersed myself in web development, mastering coding languages and 
                 gaining valuable teamwork and problem-solving skills. Through collaborative projects and 
                 mentorship, I honed my abilities while learning to communicate effectively and think critically
                  in a fast-paced environment. Additionally, I embraced the importance of continuous learning and
                   committed myself to staying updated with the latest technologies and industry trends.
                    Recognizing that technology is constantly evolving, I remain dedicated to expanding my 
                    knowledge base and refining my skills to adapt to changing demands and advancements in the field.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Experiences;

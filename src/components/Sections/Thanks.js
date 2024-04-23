import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Parallax } from 'react-scroll-parallax';

function Thanks() {
  // Calculate the translateX range dynamically based on viewport width
  const calculateTranslateXRange = () => {
    const screenWidth = window.innerWidth;
    const range = screenWidth / 10; // Adjust this value for desired range
    return [-range / 5, range / 2];
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <section id="about" className="intro-about d-flex justify-content-center mt-5 mb-5">
            <div style={{ maxWidth: '100%'}}>
              <Parallax translateX={calculateTranslateXRange()}>
                <h2 className="fs-1 text-warning mt-5 mb-5">"Thanks for Scrolling"</h2>
              </Parallax>
            </div>
          </section>
        </Col>
      </Row>
    </Container>
  );
}

export default Thanks;

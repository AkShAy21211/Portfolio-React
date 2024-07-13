import React from "react";
import "../../styles/Home.css";
import { Container, Row, Col } from "react-bootstrap";
import image from "../../assets/image.png";
import pdf from "../../assets/resume.pdf"
import { saveAs } from 'file-saver';

function Intro() {
 const downloadPDF = () => {
      const pdfPath = pdf;
      fetch(pdfPath)
         .then(response => response.blob())
         .then(blob => {
            // Save the blob as a file with desired filename
            saveAs(blob, 'resume.pdf');
         })
         .catch(error => console.error('Error downloading PDF:', error));
   };
  return (
   <Container>
      <Row>
        <Col xl={5}>
          <section id="intro" className="intro-section">
            <div className="intro ">
              I'M <span className="name">Akshay P</span> <br />
              Mern Stack Developer <br />
              <button  className="btn btn-outline-warning mt-3 fs-4">
                Contact Me
              </button>
               <button  onClick={downloadPDF} className="btn btn-outline-warning mt-3 fs-4 mx-3">
                Downlode Resume
              </button>
            </div>
          </section>
        </Col>
        <Col xl={7}>
          <div className="image mt-4">
            <img src={image} alt="" className="w-100 img-responsive" />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Intro

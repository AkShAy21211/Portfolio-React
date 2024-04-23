import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {Link} from "react-router-dom"
import phone from "../../assets/phone.png";
import location from "../../assets/location.png";
import email from "../../assets/email.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";

function Contact() {

  const navigate = (url)=>{

    window.location = url;
  }

  console.log(import.meta.env);
  return (
    <>
      <span id="span-top">
        <hr />
        <h1 className=" mt-5 mx-5 contact-title fw-bold">Contact Me</h1>
        <hr />
      </span>
      <section id="contact">
        <Container>
          <Row className="d-flex justify-content-center">
            <Col xs={12} sm={12} md={6} className="mt-5">
              <div className="contact-methoods p-3">
                <img src={email}className="img-responsive" alt="" />
                <p>akshay68580@gmail.com</p>
              </div>
            </Col>
            <Col xs={12} sm={12} md={6} className="mt-5">
              <div className="contact-methoods p-3">
                <img src={phone} className="img-responsive" alt="" />
                <p>+91 9074592275</p>
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} className="mt-5">
              <div className="contact-methoods p-3">
                <img src={location} className="img-responsive" alt="" />
                <p>Kerala,India</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <span id="span-bottom">
        <hr />
        <div><img onClick={()=>navigate(import.meta.env.VITE_REACT_APP_LINKEDIN)}src={linkedin} alt="" />
        <img onClick={()=>navigate(import.meta.env.VITE_REACT_WHATSAPP)} src={whatsapp}  className="img-responsive" alt="" />
        <img onClick={()=>navigate(import.meta.env.VITE_REACT_INSTA)} src={instagram} className="img-responsive" alt="" /></div>
        <hr />
      </span>
    </>
  );
}

export default Contact;

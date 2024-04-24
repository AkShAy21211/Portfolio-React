import React, { useCallback, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { isAlpha, isEmail } from "validator";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";
import phone from "../../assets/phone.png";
import Alert from "../helper/Alert";
import location from "../../assets/location.png";
import email from "../../assets/email.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import whatsapp from "../../assets/whatsapp.png";
import github from "../../assets/github2.png";
function Contact() {
  const [contactResponse,setContactResponse] = useState(null);
  const navigate = (url) => {
    window.location = url;
  };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [error, setError] = useState({
    name: "",
    email: "",
    message: "",
  });
  const validate = (formData) => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    } else if (!isAlpha(formData.name)) {
      errors.name = "Name can only contain alphabets.";
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!isEmail(formData.email)) {
      errors.email = "Invalid email format.";
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    <Alert success="ffewf" />;
    const errors = validate(formData);
    if (Object.keys(errors).length === 0) {
                setError({ name: "", email: "", message: "" });

 
      emailjs.send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formData,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      ).then((response)=>{

      setContactResponse(true)
      setFormData({name:"",email:"",message:""});
      setContactResponse(null)

      }).catch((error)=>{

        setContactResponse(false)
      })
      
    } else {
      setError(errors);
    }
  });

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  });

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
                <img src={email} className="img-responsive" alt="" />
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
          <Row>
            <Col className="mt-5">
              <span id="span-top">
                <hr />
                or
                <hr />
              </span>
            </Col>
          </Row>
          <Row className="d-flex  justify-content-center">
{contactResponse === true && <Alert success="Message sent" />}
{contactResponse === false && <Alert error="Message not sent" />}
            <Col className="mt-5" xs={12} sm={12} md={6}>
              <div className="container">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {error.name && <p className="text-danger">{error.name}</p>}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    {error.email && (
                      <p className="text-danger">{error.email}</p>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      placeholder="Enter your message"
                      className="form-control"
                      id="message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    {error.message && (
                      <p className="text-danger">{error.message}</p>
                    )}
                  </div>
                  <button type="submit" className="btn   w-100 contact-btn">
                    Submit
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <span id="span-bottom">
        <hr />
        <div>
          <img
            onClick={() => navigate(import.meta.env.VITE_REACT_APP_LINKEDIN)}
            src={linkedin}
            alt=""
          />
          <img
            onClick={() => navigate(import.meta.env.VITE_REACT_WHATSAPP)}
            src={whatsapp}
            className="img-responsive"
            alt=""
          />
          <img
            onClick={() => navigate(import.meta.env.VITE_REACT_GIT)}
            src={github}
            className="img-responsive"
            alt=""
          />
          <img
            onClick={() => navigate(import.meta.env.VITE_REACT_INSTA)}
            src={instagram}
            className="img-responsive"
            alt=""
          />
        </div>
        <hr />
      </span>
    </>
  );
}

export default Contact;

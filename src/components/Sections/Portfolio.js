import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../cards/Card";
import volttron from "../../assets/volttron.png"
import chat from "../../assets/chat.png"
import UM from "../../assets/UM.png"
import todo from "../../assets/todo.png"
import netflix from "../../assets/netflix.png"
 
const portfolioData = [
  { 
    image: volttron, 
    url: import.meta.env.VITE_VOLTTRON,
    info: "This robust e-commerce platform facilitates seamless online shopping experiences. It leverages Express.js for efficient backend development and MongoDB for scalable data management. (Consider adding details about features like product management, user accounts, or shopping cart functionality)" 
  },
  { 
    image: netflix, 
    url: import.meta.env.VITE_NETFLIX, 
    info: "Dive into the world of streaming entertainment with this captivating Netflix clone. Built using React for a dynamic user interface and Firebase for streamlined backend services, it delivers a familiar and engaging experience. (You could mention specific functionalities like video playback, search, or user recommendations)"
  },
  { 
    image: chat, 
    url: import.meta.env.VITE_CHAT, 
    info: "Connect and converse in real-time with this interactive chat application. Utilizing React for an intuitive interface and Firebase for robust communication infrastructure, it fosters collaboration and connection. " 
  },
  { 
    image: UM, 
    url: import.meta.env.VITE_UM,  
    info: "Empower user management with this comprehensive system. Built with React for a user-friendly interface and MongoDB for flexible data storage, it provides efficient control over user accounts and access privileges. (Specify features like user registration, login, profile management," 
  },
  { 
    image: todo, 
    url: import.meta.env.VITE_TODO,  
    info: "Stay organized and conquer your daily tasks with this streamlined to-do list app. Developed using React for a responsive interface, it empowers you to manage your workload effectively." 
  }
];


function Portfolio() {
  return (
   <Container>
      <section id="Portfolio">
        <h2 className="text-center mt-5 fs-1 fw-bold mb-5">Portfolio</h2>
        <Row>
         <Row>
          {portfolioData.map((portfolio, index) => (
            <Col className="mt-5"  key={index} xs={12} sm={12} md={4} >
              <Card isPorfolio para={true} url={portfolio.url} btn={true} image={portfolio.image} info={portfolio.info} />
            </Col>
          ))}
        </Row>
        </Row>
      </section>
    </Container>
  )
}

export default Portfolio

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Card from "../cards/Card";
import volttron from "../../assets/volttron.png"
import chat from "../../assets/chat.png"
import Social from "../../assets/comingle.png"



const portfolioData = [
  { project:"Volttron (E-commerce)" ,
    image: volttron, 
    url: import.meta.env.VITE_VOLTTRON,
    techonologies:["Nodejs","Express","Ejs","Bootstrap","google-auth","aws","razorpay","passportjs etc..",],
    info: "This robust e-commerce platform facilitates seamless online shopping experiences. It leverages Express.js for efficient backend development and MongoDB for scalable data management." 
  },
  { 
    project:"Chat application",
    image: chat, 
    techonologies:["Nodejs","Express","React","Chakra-ui etc..",],
    url: import.meta.env.VITE_CHAT, 
    info: "Connect and converse in real-time with this interactive chat application. Utilizing React for an intuitive interface and Firebase for robust communication infrastructure, it fosters collaboration and connection. " 
  },
   { 
    project:"Comingle (Social Media)",
    image: Social, 
    techonologies:["Nodejs","Express","Ejs","Bootstrap","google-auth","Socket-io","Web-Rtc","aws","razorpay","passportjs","redux-toolkit","nginx","CICD","Docker etc.."],
    url: import.meta.env.VITE_SOCIAL, 
    info: "Connect and converse in real-time with this interactive chat application. Utilizing React for an intuitive interface and Firebase for robust communication infrastructure, it fosters collaboration and connection. " 
  },

];


function Portfolio() {
  return (
    
   <Container>
      <section id="Portfolio">
      
        <h2 className="text-center mt-5 fs-1 fw-bold mb-5">Portfolio</h2>
        <Row>
        
          {portfolioData.map((portfolio, index) => (
            <Col className="mt-5"  key={index} xs={12} sm={12} md={4} >
              <Card techonologies={portfolio.techonologies} project={portfolio.project} isPorfolio para={true} url={portfolio.url} btn={true} image={portfolio.image} info={portfolio.info} />
            </Col>
          ))}
        </Row>
      </section>
    </Container>
  )
}

export default Portfolio

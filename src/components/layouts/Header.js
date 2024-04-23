import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "../../styles/Header.css";

function Header() {
 const [nav,setNav] = useState(false);
  //scroll
  const changeValueOnScroll = () =>{

    const scrollValue = document?.documentElement?.scrollTop;
    console.log(scrollValue);
    scrollValue > 100 ? setNav(true) : setNav(false);
  }
  window.addEventListener("scroll",changeValueOnScroll)


  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav === true ? "sticky" : ""}`}>

        <Container>
          <Navbar.Toggle
            className="order-0 ms-auto"
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse  className="text-center" id="responsive-navbar-nav">
            <Nav className="mx-auto ">
              <Nav.Link
                href="#about"
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#skills"
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#Portfolio"
              >
                Portfolio
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
     
  );
}

export default Header;

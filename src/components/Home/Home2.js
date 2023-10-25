import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.PNG";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I've ventured through the exciting landscape of software
              development, picked up a few neat tricks, and forged a path I'm
              proud of.
              <br />
              <br />
              From classic languages like
              <i>
                <b className="purple"> Java </b>
              </i>
              , to embracing the dynamic world of{" "}
              <i>
                <b className="purple"> Javascript </b>
              </i>{" "}
              , and beyond, I've had a blast. &nbsp;
              <br />
              <br />
              My playground includes building Web Apps using{" "}
              <i>
                <b className="purple"> MERN Stack </b> exploring the
                <b className="purple"> AI </b>
              </i>{" "}
              frontier, and more.
              <br />
              <br />
              Join me on this techy adventure, and let's create some digital
              magic together! 🚀💻
            </p>
          </Col>

          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>
              <p>
                Feel free to <span className="purple">connect </span>with me
              </p>
            </h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/jatin51997"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/jatinnaroraa/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/jatinnaroraa5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
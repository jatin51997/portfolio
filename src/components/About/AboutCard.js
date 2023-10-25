import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I'm Jatin Arora, a Masters of Applied Computer
            Science student at{" "}
            <span className="purple">
              {" "}
              Concordia University, Montreal, Canada.
            </span>
            <br></br>
            <br></br>I have <span className="purple"> 2 years</span> of
            professional experience in software development.
            <br />
            <br />
            I'm actively seeking full-time opportunities to contribute my
            expertise and passion to exciting projects.
            <br></br>
            <br></br>
            Beyond the world of coding, I have a deep love for travel and
            exploration. Join me on this journey as I seek new opportunities and
            destinations, both in the digital realm and around the world!
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "In permanent beta: learn-improve-evolve-repeat!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

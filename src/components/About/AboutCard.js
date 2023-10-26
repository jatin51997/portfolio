import React from "react";
import Card from "react-bootstrap/Card";

const cardContent = {
  name: "Jatin Arora",
  university: "Concordia University, Montreal, Canada",
  experience: "2 years",
  introduction:
    "Hello everyone! I'm Jatin Arora, a Masters of Applied Computer Science student at",
  seekingOpportunities:
    "I'm actively seeking full-time opportunities to contribute my expertise and passion to exciting projects.",
  interests:
    "Beyond the world of coding, I have a deep love for travel and exploration. Join me on this journey as I seek new opportunities and destinations, both in the digital realm and around the world!",
  quote: "In permanent beta: learn-improve-evolve-repeat!",
};

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {cardContent.introduction}{" "}
            <span className="purple">{cardContent.university}.</span>
            <br />
            <br />I have{" "}
            <span className="purple">{cardContent.experience}</span> of
            professional experience in software development.
            <br />
            <br />
            {cardContent.seekingOpportunities}
            <br />
            <br />
            {cardContent.interests}
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>"{cardContent.quote}"</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

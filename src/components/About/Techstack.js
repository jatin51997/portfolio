import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
  DiMysql,
  DiJavascript,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiExpress,
  SiOracle,
  SiSpringboot,
} from "react-icons/si";

function Techstack() {
  const iconSize = "0.75em";
  const labelSize = "0.25em";

  // Define separate arrays for different types of tech
  const programmingLanguages = [
    { Icon: CgCPlusPlus, label: "C++" },
    { Icon: DiJava, label: "Java" },
    { Icon: DiPython, label: "Python" },
    { Icon: DiJavascript, label: "JavaScript" },
  ];

  const webTechnologies = [
    { Icon: DiHtml5, label: "HTML5" },
    { Icon: DiCss3, label: "CSS3" },
  ];

  const databases = [
    { Icon: DiMysql, label: "MySQL" },
    { Icon: DiMongodb, label: "MongoDB" },
    { Icon: SiOracle, label: "Oracle" },
  ];

  const librariesFrameworks = [
    { Icon: DiReact, label: "React" },
    { Icon: SiNextdotjs, label: "Next.js" },
    { Icon: SiExpress, label: "Express.js" },
    { Icon: SiFirebase, label: "Firebase" },
    { Icon: SiSpringboot, label: "Spring Boot" },
    { Icon: DiNodejs, label: "Node.js" },
  ];

  return (
    <div>
      <h2>Programming Languages</h2>
      <Row className="justify-content-center mb-4">
        {programmingLanguages.map((item, index) => (
          <Col key={index} xs={1} md={1} className="tech-icons">
            <div className="icon-container">
              <item.Icon size={iconSize} />
              <p className="tech-label" style={{ fontSize: labelSize }}>
                {item.label}
              </p>
            </div>
          </Col>
        ))}
      </Row>

      <h2>Web Technologies</h2>
      <Row className="justify-content-center mb-4">
        {webTechnologies.map((item, index) => (
          <Col key={index} xs={1} md={1} className="tech-icons">
            <div className="icon-container">
              <item.Icon size={iconSize} />
              <p className="tech-label" style={{ fontSize: labelSize }}>
                {item.label}
              </p>
            </div>
          </Col>
        ))}
      </Row>

      <h2>Databases</h2>
      <Row className="justify-content-center mb-4">
        {databases.map((item, index) => (
          <Col key={index} xs={1} md={1} className="tech-icons">
            <div className="icon-container">
              <item.Icon size={iconSize} />
              <p className="tech-label" style={{ fontSize: labelSize }}>
                {item.label}
              </p>
            </div>
          </Col>
        ))}
      </Row>

      <h2>Libraries and Frameworks</h2>
      <Row className="justify-content-center mb-4">
        {librariesFrameworks.map((item, index) => (
          <Col key={index} xs={1} md={1} className="tech-icons">
            <div className="icon-container">
              <item.Icon size={iconSize} />
              <p className="tech-label" style={{ fontSize: labelSize }}>
                {item.label}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Techstack;

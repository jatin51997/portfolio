import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiGooglecloud,
  SiDocker,
  SiGit,
} from "react-icons/si";

function Toolstack() {
  const iconSize = "0.75em";
  const labelSize = "0.25em";

  const toolStackItems = [
    { Icon: SiGit, label: "Git" },
    { Icon: SiVisualstudiocode, label: "VS Code" },
    { Icon: SiPostman, label: "Postman" },
    { Icon: SiSlack, label: "Slack" },
    { Icon: SiVercel, label: "Vercel" },
    { Icon: SiGooglecloud, label: "Google Cloud" },
    { Icon: SiDocker, label: "Docker" },
  ];

  return (
    <Row className="justify-content-center mb-4">
      {toolStackItems.map((item, index) => (
        <Col key={index} xs={4} md={1} className="tech-icons">
          <item.Icon size={iconSize} />
          <p className="tech-label" style={{ fontSize: labelSize }}>
            {item.label}
          </p>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;

import React from "react";
import { Row } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";

function Github() {
  return (
    <Row className="justify-content-center mt-5">
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="jatin51997"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;

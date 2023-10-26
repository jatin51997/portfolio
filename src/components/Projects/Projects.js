import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards"; // Changed the import to match the correct component name
import Particle from "../Particle";

import emotion from "../../Assets/Projects/emotion.png";
import CU from "../../Assets/Projects/CU.png";
import obba from "../../Assets/Projects/obba.png";
import YTDb from "../../Assets/Projects/YTDb.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={CU}
              isYTDb={false}
              title="Concordia Career Services Application"
              description={
                <ul>
                  <li>
                    Established a secure backend environment with JWT-based user
                    authentication, role management, and MongoDB integration,
                    ensuring robust data security and role-based access control.
                  </li>
                  <li>
                    Managed a 5-member team to build a dynamic environment where
                    employers can effortlessly post job openings and aspiring
                    candidates can submit applications.
                  </li>
                  <li>
                    Embraced the Agile development philosophy, executing the
                    project in focused sprints.
                  </li>
                  <li>
                    Implemented a continuous integration and continuous
                    deployment (CI/CD) pipeline with comprehensive testing for
                    the app, ensuring robust code quality and seamless
                    deployment.
                  </li>
                </ul>
              }
              ghLink="https://github.com/jatin51997/careerServices"
              demoLink="https://career-services.vercel.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={YTDb}
              isYTDb={false}
              title="YTDb"
              description={
                <ul>
                  <li>
                    Engineered a responsive YouTube insights and recommendation
                    web app, delivering an intuitive user interface with
                    essential functionalities.
                  </li>
                  <li>
                    Incorporated a recommendation engine for suggesting channels
                    and videos based on user preferences.
                  </li>
                  <li>
                    Crafted a review system where users can provide ratings and
                    write reviews for channels and videos.
                  </li>
                  <li>
                    Optimized data flow and organization by implementing state
                    management and prop passing techniques in React.
                  </li>
                </ul>
              }
              ghLink="https://github.com/jatin51997/ytdb-project"
              demoLink="https://ytdb-project.vercel.app"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={obba}
              isYTDb={false}
              title="Optimized Binary Bat Algorithm for classification of White Blood Cells"
              description={
                <ul>
                  <li>
                    Optimized Binary Bat Algorithm for leukocyte classification,
                    attracting substantial attention with 100+ citations in the
                    field.
                  </li>
                  <li>
                    Extracted crucial features from high-dimensional leukocyte
                    dataset, reducing dimensionality for more relevant insights.
                  </li>
                  <li>
                    Impressive performance with an average accuracy of 97.3% as
                    compared to using other classifiers (KNN, Logistic
                    Regression, Random Forest, Decision Tree).
                  </li>
                  <li>
                    Favorable comparison to other nature-inspired algorithms,
                    demonstrating the algorithm's speed and accuracy in
                    hematological analysis.
                  </li>
                </ul>
              }
              ghLink="https://www.sciencedirect.com/science/article/abs/pii/S0263224119300028?via%3Dihub"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isYTDb={false}
              title="Face Recognition and Emotion Detection"
              description={
                <ul>
                  <li>
                    Utilizing deep learning and Convolutional Neural Networks
                    (CNNs) to classify facial emotions.
                  </li>
                  <li>
                    Trained three different architectures (MobileNet v2,
                    ShuffleNet v2, ResNet 18) on three diverse datasets from
                    Kaggle.
                  </li>
                  <li>
                    ResNet18 consistently achieved the highest accuracy and
                    F1-score, with the FER2013 dataset leading overall results.
                  </li>
                  <li>
                    Ablation study highlighted the significant impact of
                    hyperparameters like class number, image count, and learning
                    rate on model performance in facial emotion recognition.
                  </li>
                </ul>
              }
              ghLink="https://github.com/jatin51997/COMP6721_Winter2023_GroupJ"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import POLARSTORK from "../../assets/img/experience/polarstork.png"
import CSI from "../../assets/img/experience/csi.jpeg"
import BLO from "../../assets/img/experience/blorecs.jpeg"
import CODI from "../../assets/img/experience/codi.png"
import Tilt from "react-tilt";
import "./experience.styles.css";

const Experience = () => {
  return (
    <div id="experience">
      <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={POLARSTORK} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-space-between flex-column">
                <div>
                  <Card.Title className="text-center">Quality Assurance Engineer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Polar Stork</strong>
                    <br />
                    <strong>Technology:</strong> Cypress, RestAssured
                    <br />
                    <strong>Duration:</strong> Aug 2019 - Present
                    <br/>
                    <strong> <br></br> </strong>
                    <ul className="text-left">
                      <li><strong>Perform</strong> manual Feature and Regression testing.</li>
                      <li><strong>Prepare</strong> Test Plans and Test Cases for Release on both mobile and web platforms.
                      </li>
                      <li><strong>Create</strong> test automation.</li>

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={CSI} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Frontend Web Developer</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Corporate Security and Intelligence</strong>
                    <br />
                    <strong>Technology:</strong> WordPress
                    <br />
                    <strong>Duration:</strong> Jan 2019 - Jun 2019
                    <br/>
                    <strong> <br></br> </strong>
                    <ul className="text-left">
                      <li><strong>Developed</strong> the front end of the forensic investigation tool.</li>
                      <li><strong>Developed</strong> the company's website using WordPress.
                      </li>
                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={BLO} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Frontend Web Developer and UI/UX Consultant</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">BlocRecs</strong>
                    <br />
                    <strong>Technology:</strong> REACT, UI/UX
                    <br />
                    <strong>Duration:</strong> Jul 2018 - Aug 2018
                    <br/>
                    <strong> <br></br> </strong>
                    <ul className="text-left">
                      <li><strong>Integrated</strong> theme into react framework.</li>
                      <li><strong>Performed</strong> UI/UX consultancies to develop the companies web site design and utilization.
                      </li>
                      <li><strong>Create</strong> test automation.</li>

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
      <Jumbotron className="jumbo-style">
        <Container>
          <Tilt options={{ max: 25 }}>
            <Card>
              <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                <Card.Img variant="top" className="img-resize" src={CODI} alt="Accenture logo" />
              </Card.Header>
              <Card.Body className="d-flex justify-content-center flex-column">
                <div>
                  <Card.Title className="text-center">Full Stack Web Development Trainee</Card.Title>
                </div>
                <div>
                  <Card.Text className="text-center style">
                    <strong className="body-title-style ">Codi_Tech</strong>
                    <br />
                    <strong>Technology:</strong> Js, REACT, NodeJs
                    <br />
                    <strong>Duration:</strong> Jan 2018 - Sep 2018
                    <br/>
                    <strong> <br></br> </strong>
                    <ul className="text-left">
                      <li><strong>Developed</strong> client websites on multiple platforms mainly using Agile methodology.</li>
                      <li><strong>Led</strong> a team and <strong>coordinated</strong> website requirements with multiple stakeholders.
                      </li>
                      <li><strong>Create</strong> test automation.</li>

                    </ul>
                    
                    
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Tilt>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Experience;

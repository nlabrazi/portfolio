import React from 'react';
import ProjectCards from 'components/ProjectCards';
import { Container, Row, Col } from 'react-bootstrap';

const Projects = () => {

  return (
    <section id="projects" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
      <h3 className="page-title white-text banner-sections">Projects</h3>
      <Container>
        <Row>
          <Col>
            <span className="card-title"><a href="http://www.coach-me.best/" className="teal-text hoverline">Coach Me</a></span>
            <ProjectCards title="Coach Me"/>
          </Col>
          <Col>
            <span className="card-title"><a href="http://letelephoneose.herokuapp.com/" className="teal-text hoverline">Le Telephone Ose</a></span>
            <ProjectCards title="Le Telephone Ose"/>
          </Col>
          <Col>
            <span className="card-title"><a href="http://nabst3r.com/" className="teal-text hoverline">Snake Game</a></span>
            <ProjectCards title="Snake Game"/>
          </Col>
          </Row>
          <Row>
          <Col>
            <span className="card-title"><a href="https://na-labrazi.medium.com/" className="teal-text hoverline">Article Medium</a></span>
            <ProjectCards title="Article Medium"/>
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

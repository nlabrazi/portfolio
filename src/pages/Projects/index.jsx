import React from 'react';
import ProjectCards from 'components/ProjectCards';
import { Container, Row, Col } from 'react-bootstrap';

import videoCoach from "assets/videos/coach.mp4";
import videoBatiment from "assets/videos/batiment.mp4";
import videoSnake from "assets/videos/snake.mp4";
import videoTelephone from "assets/videos/telephone.mp4";

const Projects = () => {

  return (
    <section id="projects" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
      <h3 className="page-title white-text banner-sections">Projects</h3>
      <Container className="mt-5">
        <Row>
          <Col>
            <span className="card-title"><a href="http://www.coach-me.best/" className="teal-text hoverline">Coach Me</a></span>
            <ProjectCards
              title="Coach Me"
              backContent="Application pour trouver le meilleur coach sportif près de chez soi"
              video={videoCoach}
            />
          </Col>
          <Col>
            <span className="card-title"><a href="http://letelephoneose.herokuapp.com/" className="teal-text hoverline">Le Telephone Ose</a></span>
            <ProjectCards
              title="Le Telephone Ose"
              backContent="Application pour la chanteuse Evelyne Gallet"
              video={videoTelephone}
            />
          </Col>
          <Col>
            <span className="card-title"><a href="http://nabst3r.com/" className="teal-text hoverline">Snake Game</a></span>
            <ProjectCards
              title="Snake Game"
              backContent="Le célèbre jeu du SNAKE revisité par mes soins"
              video={videoSnake}
            />
          </Col>
          </Row>
          <Row>
          <Col>
            <span className="card-title"><a href="https://na-labrazi.medium.com/" className="teal-text hoverline">Article Medium</a></span>
            <ProjectCards
              title="Article Medium"
              backContent="Article sur Medium qui retranscrit mon expérience à l'école THP"
              video={videoBatiment}
            />
          </Col>
          <Col></Col>
          <Col></Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

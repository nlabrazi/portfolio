import React from 'react';
import ProjectCards from 'components/ProjectCards';
import { Container, Row, Col } from 'react-bootstrap';

import videoCoach from "assets/videos/coach.mp4";
import videoBatiment from "assets/videos/batiment.mp4";
import videoSnake from "assets/videos/snake.mp4";
import videoTelephone from "assets/videos/telephone.mp4";
import videoMedium from "assets/videos/medium.mp4";

const Projects = () => {

  return (
    <section id="projects" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
      <h3 className="page-title white-text banner-sections">Projects</h3>
      <Container className="mt-5">
        <Row>
          <Col>
            <ProjectCards
              title="Coach Me"
              list1="Ruby on Rails"
              list2="Javascript"
              list3="PostgreSql"
              list4="Heroku"
              content="Application pour trouver le meilleur coach sportif près de chez soi"
              backTitle="Projet de fin de batch au Wagon"
              video={videoCoach}
            />
          </Col>
          <Col>
            <ProjectCards
              title="Le Téléphone Ose"
              list1="Ruby on Rails"
              list2="Javascript"
              list3="PostgreSql"
              list4="Heroku"
              content="Offrez-vous votre chanson préférée chanté au téléphone par un artiste, pour un moment unique et plein d'émotions"
              backTitle="Projet de fin de session (fullstack) à THP "
              video={videoTelephone}
            />
          </Col>
          <Col>
            <ProjectCards
              title="Snake Game"
              list1="Javascript"
              list2="HTML"
              list3="Css"
              list4="GithubPages"
              content="Le célèbre jeu du SNAKE revisité par mes soins"
              backTitle="Application créée perso pour apprendre Javascript"
              video={videoSnake}
            />
          </Col>
          <Col>
            <ProjectCards
              title="Bâtiment & Travaux"
              list1="Ruby on Rails"
              list2="Javascript"
              list3="PostgreSql"
              list4="Heroku"
              content="Application destinée aux entrepreneurs souhaitant mieux gérer leurs partenaires"
              backTitle="Projet perso en cours"
              video={videoBatiment}
            />
          </Col>
          <Col>
            <ProjectCards
              title="Article Medium"
              list1="empty"
              list2="empty"
              list3="empty"
              list4="empty"
              content="Article sur Medium qui retranscrit mon expérience à l'école THP"
              backTitle="Mon premier article Medium, déstiné à valider ma 'mission' à THP"
              video={videoMedium}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;

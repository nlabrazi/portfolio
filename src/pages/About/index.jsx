import React from 'react';
import { Card, Container, CardGroup, Row, Col } from 'react-bootstrap';
import homeCard from "assets/images/home-card.jpg";

const About = () => {

  const styles = {
    card: {
      borderRadius: 15,
    },
    cardImage: {
      objectFit: 'cover',
      height: '100%',
    }
  }

  return (
    <section id="about" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
      <h3 className="page-title white-text banner-sections">About</h3>
      <Container fluid>
        <CardGroup className="m-5 d-block card-group-about">
          <Card className="m-5 border-0 shadow top-card-about" style={styles.card}>
            <Row className="rowAbout">
              <Col>
                <Card.Img src={homeCard} style={styles.cardImage} />
              </Col>
              <Col>
              <Card.Body>
                <Card.Title as="h4" className="brown-text light" >Mais qui suis-je ?</Card.Title>
                  <br></br>
                  <br></br>
                <Card.Text style={styles.cardText}>
                  Ayant obtenu mon premier PC à l'age de 6 ans (Amstrad CPC 464), l'informatique a pour moi toujours été une passion.
                  J'ai donc naturellement fais le choix d'en faire mon métier.
                  <br></br>
                  <br></br>
                  En tant que développeur Web, j'aime utiliser mon souci du détail obsessionnel,
                  pour accomplir chacune des missions qui me sont proposées.
                  Impatient de pouvoir ajouter ma touche personnelle ainsi que mon enérgie à la concrétisation de projets.
                  Je serai ravi de faire parti de vo(s)tre futur(s) aventure(s).
                </Card.Text>
              </Card.Body>
              </Col>
            </Row>
            <Card.Footer>
              <strong>Current Focus</strong>:&nbsp;<a href="https://jekyllrb.com/">Jekyll</a>&nbsp;//&nbsp;<a aria-label="Navigate to the Full Stack React homepage" href="https://fr.reactjs.org/">React</a>&nbsp;//&nbsp;<a aria-label="Navigate to the article &quot;Scalable CSS&quot;" href="https://cryptonaute.fr/blockchain/">Blockchain</a>
            </Card.Footer>
          </Card>
        </CardGroup>
      </Container>
    </section>
  );
};

export default About;

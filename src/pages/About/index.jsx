import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
  return (
      <section id="about" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
        <h3 className="page-title white-text banner-sections">About</h3>
        <div className="container">
          <Card>
            <Card.Body>
            <div className="container flow-text">
              <blockquote>
                <h2>
                  Jeune Développeur fullstack passioné, axé sur la collaboration et conception de Web App !
                </h2>
              </blockquote>
              <p>
                Ayant obtenu mon premier PC à l'age de 6 ans (Amstrad CPC 464), l'informatique a pour moi toujours été une passion.
                J'ai donc naturellement fais le choix d'en faire mon métier.
              </p>
              <p>
                En tant que développeur Web, j'aime utiliser mon souci du détail obsessionnel,
                pour accomplir chacune des missions qui me sont proposées.
                Impatient de pouvoir ajouter ma touche personnelle ainsi que mon enérgie à la concrétisation de projets.
                Je serai ravi de faire parti de vo(s)tre futur(s) aventure(s).
              </p>
            </div>
          </Card.Body>
          <Card.Footer>
            <strong>Current Focus</strong>:&nbsp;<a href="https://jekyllrb.com/">Jekyll</a>&nbsp;//&nbsp;<a aria-label="Navigate to the Full Stack React homepage" href="https://fr.reactjs.org/">React</a>&nbsp;//&nbsp;<a aria-label="Navigate to the article &quot;Scalable CSS&quot;" href="https://cryptonaute.fr/blockchain/">Blockchain</a>
          </Card.Footer>
            <Card.Img variant="bot" src="https://en.wikipedia.org/wiki/Home_computer#/media/File:Cpc464.computer.750pix.jpg" />
        </Card>
      </div>
    </section>
  );
};

export default About;

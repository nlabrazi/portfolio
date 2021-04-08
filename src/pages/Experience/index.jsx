import React from 'react';

import dominos from "assets/images/dominos.png"
import doctolib from "assets/images/doctolib.jpeg"

import { Card, Container } from 'react-bootstrap';


const Experience = () => {
  return (
    <section id="experience" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
    <h3 className="page-title white-text banner-sections">Experience</h3>
    <Container className="mt-5">

      <Card>
        <Card.Body>
        <div className="card-content">
          <div className="row">
            <div className="col s12 m2">
              <a href="https://www.doctolib.fr/"><img alt="Doctolib logo" src={doctolib} className="responsive-img center-block"/></a>
            </div>
            <div className="col s12 m10">
              <p>
                <span className="card-title"><a href="https://www.doctolib.fr/" className="teal-text hoverline">Doctolib</a></span>
              </p>
            </div>
          </div>
          <div className="role brown-text">Monitoring - Support</div>
          <p>
            <em className="grey-text">Doctolib est une entreprise franco-allemande fondée en 2013 qui propose un service de gestion en ligne des consultations pour les professionnels de santé et un service de prise de rendez-vous en ligne pour les patients.</em>
          </p>
          <h6>Develop Product</h6>
          <ul>
            <li>
              Aute incididunt laboris dolore id eiusmod id officia laborum.
            </li>
            <li>
              Sunt proident qui cupidatat nostrud aliquip dolor cupidatat ullamco elit duis aute nostrud ut fugiat non duis.
            </li>
            <li>
              Consectetur nostrud sint ut fugiat in amet adipisicing aliquip ut eiusmod dolor culpa sed eu.
            </li>
            <li>In ut commodo dolor nostrud ut qui veniam adipisicing elit laborum consectetur esse laborum deserunt sed.</li>
            <li>
              Tools: Ruby, Rails, PostgreSQL // React, JS, jQuery // Sass //
              HTML, JSX
            </li>
          </ul>
          <h6>Accomplishments</h6>
          <ul>
            <li>
              Sit ex excepteur do nostrud dolore et consectetur magna occaecat officia.
            </li>
            <li>
              Culpa nulla id exercitation ut magna quis irure duis in adipisicing est voluptate consequat do tempor ut officia.
            </li>
            <li>
              Occaecat laboris non nisi enim magna adipisicing tempor anim ut.
            </li>
          </ul>
        </div>
        </Card.Body>
        <Card.Footer>
          <span>Jan 2021 - Present | Paris, FR</span>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Body>
        <div className="card-content">
          <div className="row">
            <div className="col s12 m2">
              <a href="https://www.dominos.fr/"><img alt="Dominos logo" src={dominos} className="responsive-img center-block"/></a>
            </div>
            <div className="col s12 m10">
              <p>
                <span className="card-title"><a href="https://www.doctolib.fr/" className="teal-text hoverline">Dominos</a></span>
              </p>
            </div>
          </div>
          <div className="role brown-text">Technical Analyst</div>
          <p>
            <em className="grey-text">Domino's Pizza est une franchise internationale de restauration rapide, principalement de préparation et de livraison de pizza. Domino’s Pizza compte aujourd'hui, plus de 17 000 points de vente dans soixante pays.</em>
          </p>
          <h6>Tâches :</h6>
          <ul>
            <li>
              Diagnostique de pannes et résolution (niveau 3)
            </li>
            <li>
              Analyse et maintenance de base de données
            </li>
            <li>
              Développement SQL
            </li>
            <li>
              Création & mise en place d'outils d'amélioration des tâches opératoires
            </li>
          </ul>
          <h6>Outils / Langages :</h6>
          <ul>
            <li>
              ETL / Web-App / Web-Server (Aws / Azure)
            </li>
            <li>
              Active Directory, Exchange...
            </li>
            <li>
              SQL Server 2016
            </li>
          </ul>
        </div>
        </Card.Body>
        <Card.Footer>
          <span>Jan 2021 - Present | Paris, FR</span>
        </Card.Footer>
      </Card>

      <Card>
        <Card.Body>
        <div className="card-content">
          <div className="row">
            <div className="col s12 m2">
              <a href="https://www.dominos.fr/"><img alt="Dominos logo" src={dominos} className="responsive-img center-block"/></a>
            </div>
            <div className="col s12 m10">
              <p>
                <span className="card-title"><a href="https://www.doctolib.fr/" className="teal-text hoverline">Dominos</a></span>
              </p>
            </div>
          </div>
          <div className="role brown-text">IT Support</div>
          <p>
            <em className="grey-text">Domino's Pizza est une franchise internationale de restauration rapide, principalement de préparation et de livraison de pizza. Domino’s Pizza compte aujourd'hui, plus de 17 000 points de vente dans soixante pays.</em>
          </p>
          <h6>Tâches :</h6>
          <ul>
            <li>
              Diagnostique de pannes et résolution (niveau 1 & 2)
            </li>
            <li>
              Préparation, intégration & installation de postes utilisateurs
            </li>
            <li>
              Administration système
            </li>
            <li>
              Développement SQL
            </li>
          </ul>
          <h6>Outils / Langages :</h6>
          <ul>
            <li>
              Active Directory, Exchange...
            </li>
            <li>
              BlackBerry Server
            </li>
            <li>
              SQL Server 2012
            </li>
          </ul>
        </div>
        </Card.Body>
        <Card.Footer>
          <span>2012 - 2014 | Issy-lesMoulineaux, FR</span>
        </Card.Footer>
      </Card>

    </Container>
  </section>
  );
};

export default Experience;

import React from 'react';

import ubisoft from "assets/images/ubisoft.png"
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
              <a href="https://www.ubisoft.com/"><img alt="Ubisoft logo" src={ubisoft} className="responsive-img center-block"/></a>
            </div>
            <div className="col s12 m10">
              <p>
                <span className="card-title"><a href="https://www.ubisoft.com/" className="teal-text hoverline">Ubisoft</a></span>
              </p>
            </div>
          </div>
          <div className="role brown-text">Tools Specialist - Support</div>
          <p>
            <em className="grey-text">Ubisoft est une entreprise française de développement, d'édition et de distribution de jeux vidéo, elle est détenteur de nombreuses franchises à succès telles que Rayman, Les Lapins Crétins, Prince of Persia, Assassin's Creed, Far Cry, Watch Dogs, Just Dance, TrackMania et Tom Clancy's. </em>
          </p>
          <h6>Tâches principales :</h6>
          <ul>
            <li>
              Monitoring des environements de production et staging
            </li>
            <li>
              Résolution incidents
            </li>
            <li>
              Suivis des nouvelles features avec PM
            </li>
            <li>
              Développement de nouvelles fonctionnalités
            </li>
            <li>
              Mise à jour guides et documentations
            </li>
          </ul>
          <h6>Outils / Langages :</h6>
          <ul>
            <li>
              JIRA
            </li>
            <li>
              Grafana, Kibana, Datadog
            </li>
            <li>
              NodeJs, Angular, PostgreSQL
            </li>
          </ul>
        </div>
        </Card.Body>
        <Card.Footer>
          <span>Sept 2021 - Today | Paris (75)</span>
        </Card.Footer>
      </Card>

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
          <div>
            <em className="grey-text">Doctolib est une entreprise franco-allemande fondée en 2013 qui propose un service de gestion en ligne des consultations pour les professionnels de santé et un service de prise de rendez-vous en ligne pour les patients.</em>
          </div>
          <h6>Tâches principales :</h6>
          <ul>
            <li>
              Monitoring des environements de production et testing (Proxy, Tunnel VPN, Raspberry...)
            </li>
            <li>
              Résolution incidents (niveau 3)
            </li>
            <li>
              Suivis des nouvelles features avec PO / PM / Dev
            </li>
            <li>
              Mise en place de procédures de check & automatisations des monkeys tasks
            </li>
          </ul>
          <h6>Outils / Langages :</h6>
          <ul>
            <li>
              JIRA, Zendesk
            </li>
            <li>
              Grafana, Kibana, Datadog, NewRelic
            </li>
            <li>
              Ruby, Javascript, PostgreSQL
            </li>
          </ul>
        </div>
        </Card.Body>
        <Card.Footer>
          <span>Oct 2017 - Jan 2020 | Paris (75)</span>
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
          <h6>Tâches principales :</h6>
          <ul>
            <li>
              Résolution incidents (niveau 3)
            </li>
            <li>
              Analyse, insertions et maintenance de base de données
            </li>
            <li>
              Développement SQL (Stored Proc, data)
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
              NewRelic, Active Directory, Exchange...
            </li>
            <li>
              SQL Server 2016
            </li>
          </ul>
        </div>
        </Card.Body>
        <Card.Footer>
          <span>Jan 2015 - Oct 2017 | Gennevilliers (92)</span>
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
          <h6>Tâches principales :</h6>
          <ul>
            <li>
              Résolution incidents (niveau 1 & 2)
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
          <span>Dec 2012 - Dec 2014 | Issy-lesMoulineaux (92)</span>
        </Card.Footer>
      </Card>

    </Container>
  </section>
  );
};

export default Experience;

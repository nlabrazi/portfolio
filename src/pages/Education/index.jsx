import React from 'react';
import { Container } from 'react-bootstrap';
import CardEducation from 'components/CardEducation';

import Thp from "assets/images/thp.png"
import LeWagon from "assets/images/lewagon.png"
import Global from "assets/images/globalknow.png"
import Adjutor from "assets/images/adjutor.png"

const Education = () => {
  return (
    <section id="education" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
      <h3 className="page-title white-text banner-sections">Education</h3>
      <Container>
        <CardEducation
          title="The Hacking Project"
          licence="Developpeur Web "
          location="Paris (75)"
          dateStart="2020"
          dateEnd="2021"
          description="The Hacking Project est une formation au code, à plein temps ouverte à tous et sans pré-requis"
          skills="Ruby on Rails, ReactJs, Redux"
          img={Thp}
        />
        <CardEducation
          title="Le Wagon"
          licence="Developpeur Web "
          location="Paris (75)"
          dateStart="2020"
          dateEnd="2020"
          description="Le Wagon est un 'coding bootcamp' qui enseigne à ses élèves le développement d'applications web 'from scratch'"
          skills="Ruby on Rails, Javascript"
          img={LeWagon}
        />
        <CardEducation
          title="Global Knowledge"
          licence="Administration BDD "
          location="Rueil-Malmaison (92)"
          dateStart="2020"
          dateEnd="2020"
          description="Formation Requêtes & Administration SQL Server 2016"
          skills="SQL Server"
          img={Global}
        />
        <CardEducation
          title="Lycée Saint Adjutor"
          licence="BTS SIO "
          location="Vernon (27)"
          dateStart="2020"
          dateEnd="2020"
          description="Conception et développement d'applications"
          skills="C, C#, MySql"
          img={Adjutor}
        />
      </Container>
    </section>
  );
};

export default Education;

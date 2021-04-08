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
      <Container className="mt-5">
        <CardEducation
          title="The Hacking Project"
          licence="Développeur Web "
          location="Paris (75)"
          dateStart="09/2020"
          dateEnd="04/2021"
          description="The Hacking Project est une formation au code, à plein temps ouverte à tous et sans pré-requis"
          skills="Ruby on Rails, ReactJs, Redux"
          img={Thp}
        />
        <CardEducation
          title="Le Wagon"
          licence="Développeur Web "
          location="Paris (75)"
          dateStart="04/2020"
          dateEnd="07/2020"
          description="Le Wagon est un 'bootcamp' qui enseigne à ses élèves le développement d'applications web"
          skills="Ruby on Rails, Javascript"
          img={LeWagon}
        />
        <CardEducation
          title="Global Knowledge"
          licence="Administration BDD "
          location="Rueil-Malmaison (92)"
          dateStart="01/2016"
          dateEnd="02/2016"
          description="Formation Requêtes & Administration SQL Server 2016"
          skills="SQL Server"
          img={Global}
        />
        <CardEducation
          title="Lycée Saint Adjutor"
          licence="BTS SIO "
          location="Vernon (27)"
          dateStart="09/2011"
          dateEnd="06/2013"
          description="Conception et développement d'applications"
          skills="C, C#, MySql"
          img={Adjutor}
        />
      </Container>
    </section>
  );
};

export default Education;

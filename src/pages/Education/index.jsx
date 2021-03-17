import React from 'react';
import { Container } from 'react-bootstrap';
import CardProduct from 'components/CardProduct';

import Thp from "assets/images/thp.png"
import LeWagon from "assets/images/lewagon.png"
import Global from "assets/images/globalknow.png"
import Adjutor from "assets/images/adjutor.png"

const Education = () => {
  return (
    <section id="education" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
      <h3 className="page-title white-text banner-sections">Education</h3>
      <Container>
        <CardProduct title="The Hacking Project" description="Developpeur Web " strong="ReactJs / Redux" location="Paris (75)" date="2020" img={Thp} />
        <CardProduct title="Le Wagon" description="Developpeur Web " strong="Ruby / Rails" location="Paris (75)" date="2020" img={LeWagon} />
        <CardProduct title="Global Knowledge" description="Administration BDD " strong="SQL Server - MCSA"location="Rueil-Malmaison (92)" date="2020" img={Global} />
        <CardProduct title="Lycée Saint Adjutor" description="BTS SIO " strong="Option SLAM : Conception et développement d'applications"location="Vernon (27)" date="2020" img={Adjutor} />
      </Container>
    </section>
  );
};

export default Education;

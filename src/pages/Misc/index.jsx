import React from 'react';
import { Container, CardGroup } from 'react-bootstrap';

import MiscCards from 'components/CardMisc';

import wow from 'assets/images/wow.png';
import travel from 'assets/images/travel.jpg';
import movies from 'assets/images/movies.jpg';
import labagar from 'assets/images/labagar.jpg';

const Misc = () => {
  return (
    <section id="misc" className="section scrollspy" data-aos="fade-down" data-aos-delay="175">
        <h3 className="page-title white-text banner-sections">Hobbies</h3>
        <Container className="mt-5">
          <CardGroup>
            <div className="col s12 m6">
              <MiscCards
                title="Muay Thaï Fan"
                backContent="Pratiquant de boxe thaïlandaise"
                footer="Entrainement au KemMuayThai Gym - Thaïlande (2017)"
                img={labagar}
              />
            </div>
            <div className="col s12 m6">
              <MiscCards
                title="Glob Trotters"
                backContent="Passionné par les voyages"
                footer="Voyages sur les 5 continents"
                img={travel}
              />
            </div>
            <div className="col s12 m6">
              <MiscCards
                title="Video Games Fan"
                backContent="Grand passionné de jeux vidéos"
                footer="Tryharder, compétiteur de l'extrême et streamer"
                img={wow}
              />
            </div>
            <div className="col s12 m6">
              <MiscCards
                title="Cinéma Fan"
                backContent="A l'époque où l'on pouvait sortir"
                footer="Epoque révolue, merci confinement..."
                img={movies}
              />
            </div>
          </CardGroup>
        </Container>
      </section>
  );
};

export default Misc;

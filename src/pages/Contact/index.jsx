import React from 'react';
import { Card, Container } from 'react-bootstrap';

import Icon from '@mdi/react';
import { mdiEmail, mdiLinkedin, mdiGithub } from '@mdi/js';

const Contact = () => {
  return (
    <section id="contact" className="section scrollspy full-height" data-aos="fade-down" data-aos-delay="175">
        <h3 className="page-title white-text teal banner-sections">Contact</h3>
        <Container className="mt-5">
          <Card>
            <Card.Body>
              <p>
                <Icon color="#008073" path={mdiEmail} size={1} />
                <a aria-label="Email Nabil" href="mailto:na.labrazi@gmail.com" className="hoverline"> na.labrazi@gmail.com</a>
              </p>
              <p>
                <Icon color="#008073" path={mdiGithub} size={1} />
                <a aria-label="Nabil on Github" href="http://github.com/nlabrazi" className="hoverline"> github.com/nlabrazi</a>
              </p>
              <p>
                <Icon color="#008073" path={mdiLinkedin} size={1} />
                <a aria-label="Nabil on LinkedIn" href="https://fr.linkedin.com/in/nabil-labrazi-a0a97a1a6" className="hoverline"> https://fr.linkedin.com/in/nabil-labrazi-a0a97a1a6</a>
              </p>
            </Card.Body>
          </Card>
        </Container>
      </section>
  );
};

export default Contact;

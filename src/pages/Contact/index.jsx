import React from 'react';
import { Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <section id="contact" className="section scrollspy full-height" data-aos="fade-down" data-aos-delay="175">
        <h3 className="page-title white-text teal banner-sections">Contact</h3>
        <div className="container">
          <Card>
            <Card.Body>
              <p>
                <a aria-label="Email Nabil" href="mailto:na.labrazi@gmail.com" data-position="top" data-tooltip="Email Nabil" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                  <i className="fa fa-envelope"></i>
                </a>
                <a aria-label="Email Nabil" href="mailto:na.labrazi@gmail.com" className="hoverline">na.labrazi@gmail.com</a>
              </p>
              <p>
                <a aria-label="View Nabil on GitHub" href="http://github.com/nlabrazi" data-position="top" data-tooltip="View Nabil on GitHub" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                  <i className="fa fa-github"></i>
                </a>
                <a aria-label="Andrew on Github" href="http://github.com/nlabrazi" className="hoverline">github.com/nlabrazi</a>
              </p>
              <p>
                <a aria-label="View Nabil on LinkedIn" href="https://fr.linkedin.com/in/nabil-labrazi-a0a97a1a6" data-position="top" data-tooltip="View Nabil on LinkedIn" className="btn-floating btn-large waves-effect waves-light brown tooltipped">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a aria-label="Andrew on LinkedIn" href="https://fr.linkedin.com/in/nabil-labrazi-a0a97a1a6" className="hoverline">https://fr.linkedin.com/in/nabil-labrazi-a0a97a1a6</a>
              </p>
            </Card.Body>
          </Card>
        </div>
      </section>
  );
};

export default Contact;

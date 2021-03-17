import React from 'react';

import Aos from 'aos';
import 'aos/dist/aos.css';

import InfoDisplayer from "components/InfoDisplayer";

const Home = () => {
  Aos.init();
  return (
    <div className="d-flex flex-column justify-content-center" id="home" data-aos="fade-down" data-aos-delay="75">
      <div className="container aos-init aos-animate">
        <h1>Nabil Labrazi</h1>
        <InfoDisplayer />
      </div>
    </div>
  );
};

export default Home;

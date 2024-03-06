import React from "react";
import { TypeAnimation } from 'react-type-animation';

const InfoDisplayer = () => {

  return (
    <div style={{ color: "#0f0" }}>
      <TypeAnimation
        sequence={[
          'Développeur Web Full-Stack Ruby on Rails/ReactJs,ouvert à toute oportunités.'
        ]}
        speed={50} />
    </div>
  );
};

export default InfoDisplayer;

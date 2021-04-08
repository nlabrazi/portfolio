import React from "react";
import Typing from "react-typing-animation";

const InfoDisplayer = () => {

  return (
    <div style={{ color: "#0f0" }}>
      <Typing speed={50}>
        Développeur Web Full-Stack Ruby on Rails/ReactJs,
        <Typing.Speed ms={20} />
         ouvert à toute oportunités.
      </Typing>
      <Typing>
        <span>Disponible CDI, CDD, Free-Lance pour toute opération CTF...</span>
        <Typing.Backspace count={27} />
      </Typing>

      <Typing>
        <span>En tant que Junior Dev.</span>
        <span> J'amènes également les croissants/chocoloatines pour tout le monde !</span>
        <Typing.Reset count={1} delay={500} />
      </Typing>
    </div>
  );
};

export default InfoDisplayer;

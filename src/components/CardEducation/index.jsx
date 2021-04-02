import React from 'react';

const CardEducation = (props) => {

  return (
    <div className="card-education">
      <img alt="cardimg" src={props.img} />
      <div className="card-education-infos">
        <h4 className="brown-text light">{props.title}</h4>
          <ul>
            <li>{props.dateStart} - {props.dateEnd}</li>
            <li>{props.location}</li>
            <li>{props.licence}</li>
          </ul>
      </div>
      <div className="card-education-school">
        <ul>
          <li>{props.description}</li>
          <li>Languages : <strong>{props.skills}</strong></li>
        </ul>
      </div>
    </div>
  );
};

export default CardEducation;

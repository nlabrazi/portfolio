import React from 'react';
import { Card } from 'react-bootstrap';

const CardEducation = (props) => {

  return (
    <Card className="card-education">
      <Card.Header>{props.title}</Card.Header>
      <Card.Body>
        <div className="img">
          <img alt="cardimg" src={props.img} />
        </div>
        <div className="details">
          <ul>
            <li>{props.dateStart} - {props.dateEnd}</li>
            <li>{props.location}</li>
            <li>{props.licence}</li>
          </ul>
        </div>
        <div className="other">
          <ul>
            <li>{props.description}</li>
            <li>Languages : <strong>{props.skills}</strong></li>
          </ul>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardEducation;

import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';

const ProjectCards = (props) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card onClick={handleClick} >
        <video autoPlay muted loop>
          <source src={props.video} type="video/x-m4v" />
        </video>
        <Card.Body>
          <div className="TopCard">
            <Card.Title onClick={handleClick}>{props.title}</Card.Title>
          </div>
          <Card.Text>
            {props.content}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card onClick={handleClick} >
        <Card.Body>
          <Card.Title>{props.backTitle}</Card.Title>
          <Card.Text>
            {props.backContent}
            <ul>
              <li>{props.list1}</li>
              <li>{props.list2}</li>
              <li>{props.list3}</li>
              <li>{props.list4}</li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </ReactCardFlip>
  );
};

export default ProjectCards;

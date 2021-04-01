import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import ReactCardFlip from 'react-card-flip';
import NavigationIcon from 'mdi-react/NavigationIcon';

const ProjectCards = (props) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card onClick={handleClick} >
        <video autoPlay muted controls>
          <source src={props.video} type="video/x-m4v" />
        </video>
        <Card.Body>
        <div className="TopCard">
          <Card.Title onClick={handleClick}>{props.title} - Détails<NavigationIcon color="#008073" /></Card.Title>
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
            <NavigationIcon color="#008073" onClick={handleClick} />
          </Card.Text>
        </Card.Body>
      </Card>
    </ReactCardFlip>
  );
};

export default ProjectCards;

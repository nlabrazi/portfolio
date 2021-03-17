import React, { useState } from 'react';
import ReactCardFlip from 'react-card-flip';
import { Card } from 'react-bootstrap';
import NavigationIcon from 'mdi-react/NavigationIcon';
import projectfont from "assets/images/coding-project.jpeg"

const ProjectCards = (props) => {

  const [isFlipped, setIsFlipped] = useState(false);
  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Card>
        <Card.Img variant="top" src={projectfont} />
        <Card.Body>
        <div className="TopCard">
          <Card.Title>{props.title}</Card.Title>
          <NavigationIcon color="#008073" onClick={handleClick} />
        </div>
          <Card.Text>
            {props.content}
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
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

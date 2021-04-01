import React from 'react';
import { Card } from 'react-bootstrap';

const MiscCards = (props) => {
  return (
    <Card style={{ width: '50rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
      </Card.Body>
      <Card.Footer>{props.footer}</Card.Footer>
    </Card>
  );
};

export default MiscCards;

import React from 'react';
import { Button } from 'react-bootstrap';

const CardProduct = (props) => {

  return (
    <div className="card-product">
      <img alt="cardimg" src={props.img} />
      <div className="card-product-infos">
        <h2>{props.title}</h2>
        <p>{props.location} - {props.date}</p>
        <Button variant="primary">Découvrir</Button>{''}
      </div>
      <div className="card-product-school">
        <p>{props.description}<strong>{props.strong}</strong></p>
      </div>
    </div>
  );
};

export default CardProduct;

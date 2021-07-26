import React from 'react';
import sample from './sampledata.js';

const RelatedCard = (props) => (
  <div>
    <div>{props.product.category}</div>
    <div>{props.product.name}</div>
    <div>{props.product.default_price}</div>
  </div>
);

export default RelatedCard;
import React from 'react';
import sample from './sampledata.js';

const RelatedCard = (props) => (
  // var discounted = false;
  // if (sample.samplestyles.sale_price) {
  //   discounted = true;
  // }

  <div className="products">
    <i className="far fa-star fa-lg"></i>
    <img className="carousel-image" src={sample.samplestyles.photos.[0].url}></img>
    <div className="category">{props.product.category}</div>
    <b className="related-name">{props.product.name}</b>
    <div className="price">
      ${props.product.default_price}
      {/* {discounted ? sample.samplestyles.sale_price : props.product.default_price} */}
    </div>
    {/* <div>{star ratings here}</div> */}
  </div>
);

export default RelatedCard;
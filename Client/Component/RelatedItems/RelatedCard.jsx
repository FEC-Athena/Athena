import React, { useState } from 'react';
import sample from './sampledata.js';
import ComparingPopup from './ComparingPopup.jsx';

const RelatedCard = (props) => {
  // ------- Change price style if it's on sale --------
  const discountedStyle = {
    textDecoration: 'line-through',
    color: 'grey'
  };

  const renderPrice = () => {
    if (props.product.sale_price) {
      return (
        <div className="price" >
          <span className="price" style={discountedStyle}>
            ${props.product.default_price}
          </span> <span className="sale" style={{color: "red"}}>
            ${props.product.sale_price}
          </span>
        </div>
      )
    } else {
      return (
        <div className="price" >
          ${props.product.default_price}
        </div>
      );
    }
  };

  // -------------------------------------------
  return (
    <div className="products">
      <i className="far fa-star fa-lg" onClick={() => props.setStarPopup(true)}></i>
      <img className="carousel-image" src={props.product.photos[0].url}></img>
      <div className="category">{props.product.category}</div>
      <b className="related-name">{props.product.name}</b>
      {renderPrice()}
      {/* <div>{star ratings here}</div> */}
      <ComparingPopup trigger={props.starPopup} setTrigger={props.setStarPopup} ClosePopup={props.ClosePopup}/>
    </div>
  );
};

export default RelatedCard;
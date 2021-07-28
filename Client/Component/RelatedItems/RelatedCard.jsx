import React, { useState } from 'react';
import sample from './sampledata.js';
import ComparingPopup from './ComparingPopup.jsx';

const RelatedCard = (props) => {
  const discountedStyle = {
    textDecoration: 'line-through',
    textColor: 'grey'
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

  const [starPopup, setStarPopup] = useState(false);

  return (
    <div className="products">
      <i className="far fa-star fa-lg" onClick={() => setStarPopup(true)}></i>
      <img className="carousel-image" src={props.product.photos[0].url}></img>
      <div className="category">{props.product.category}</div>
      <b className="product-name">{props.product.name}</b>
      {renderPrice()}
      {/* <div>{star ratings here}</div> */}
      <ComparingPopup trigger={starPopup} setTrigger={setStarPopup}/>
    </div>
  );
};

export default RelatedCard;
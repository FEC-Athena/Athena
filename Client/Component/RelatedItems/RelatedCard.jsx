/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable import/extensions */
import React, { useContext } from 'react';
// import sample from './sampledata.js';
import ComparingPopup from './ComparingPopup.jsx';
import Context from './related-context.js';
// import AppContext from '../context.js';

const RelatedCard = (props) => {
  // const { relatedStyles } = useContext(AppContext);
  const { starPopup, handleStarPopup } = useContext(Context);

  const salePrice = props.item.style.results[0].sale_price;

  // ------- Change price style if it's on sale --------
  const discountedStyle = {
    textDecoration: 'line-through',
    color: 'grey'
  };

  const renderPrice = () => {
    if (salePrice) {
      return (
        <div className="price" >
          <span className="price" style={discountedStyle}>
            ${props.item.product.default_price}
          </span> <span className="sale" style={{ color: "red" }}>
            ${salePrice}
          </span>
        </div>
      )
    } else {
      return (
        <div className="price" >
          ${props.item.product.default_price}
        </div>
      );
    }
  };

  const prodImg = props.item.style.results[0].photos[0].url;

  // console.log("this is from card", relatedStyles);
  // -------------------------------------------
  if (props.item) {
    // console.log("this is from card", relatedStyles);
    return (
      <div className="products">
        {/* {console.log("this is related styles", relatedStyles)} */}
        <i className="far fa-star fa-lg" onClick={() => handleStarPopup(true)}></i>
        {prodImg ? <img className="carousel-image" src={prodImg}/> : <img className="carousel-image" src={`https://www.carlscards.com/wp-content/uploads/2020/05/No-Image.jpg`}/>}
        <div className="category">{props.item.product.category}</div>
        <b className="related-name">{props.item.product.name}</b>
        {renderPrice()}
        {/* <div>{star ratings here}</div> */}
        <ComparingPopup trigger={starPopup} currentProd={props.item.product}/>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default RelatedCard;
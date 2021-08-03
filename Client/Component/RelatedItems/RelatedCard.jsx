import React, { useContext } from 'react';
import ComparingPopup from './ComparingPopup.jsx';
import Context from './related-context.js';
import AppContext from '../context.js';

const RelatedCard = (props) => {
  const { handleCurrent } = useContext(AppContext);
  const { starPopup, handleStarPopup } = useContext(Context);

  // ------- Change price style if it's on sale --------
  let salePrice = props.item.style.results[0].sale_price;
  const prodImg = props.item.style.results[0].photos[0].url;

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
      );
    } else {
      return (
        <div className="price" >
          ${props.item.product.default_price}
        </div>
      );
    }
  };

  // -------------------------------------------
  return ((props.item) ? (
    <div className="products">
      <i className="far fa-star fa-lg" onClick={() => handleStarPopup(true)}></i>
      {prodImg ? <img className="carousel-image" src={prodImg} onClick={() => handleCurrent(props.item.product.id)}/> : <img className="carousel-image" src={`https://www.carlscards.com/wp-content/uploads/2020/05/No-Image.jpg`} onClick={() => handleCurrent(props.item.product.id)}/>}
      <div className="category">{props.item.product.category}</div>
      <b className="related-name">{props.item.product.name}</b>
      {renderPrice()}
      {/* <div>{star ratings here}</div> */}
      <ComparingPopup trigger={starPopup} currentProd={props.item.product}/>
    </div>
  ) : <div></div>);
};

export default RelatedCard;
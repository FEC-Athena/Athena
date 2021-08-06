import React from 'react';
import Star from '../Reviews/Star.jsx';

const OutfitCard = (props) => {
  let salePrice = props.prod.style[0].sale_price;
  const prodImg = props.prod.style[0].photos[0].url;

  const discountedStyle = {
    textDecoration: 'line-through',
    color: 'grey'
  };

  const renderPrice = () => {
    if (salePrice) {
      return (
        <div className="price" >
          <span className="price" style={discountedStyle}>
            ${props.prod.product.default_price}
          </span> <span className="sale" style={{ color: "red" }}>
            ${salePrice}
          </span>
        </div>
      );
    } else {
      return (
        <div className="price" >
          ${props.prod.product.default_price}
        </div>
      );
    }
  };

  return (
    <div className="products">
      <i className="far fa-times-circle fa-lg" onClick={() => props.handleRemoveOutfit(props.prod.product.id)}></i>
      {prodImg ? <img className="carousel-image" src={prodImg} alt="product image"/> : <img className="carousel-image" src={`https://www.carlscards.com/wp-content/uploads/2020/05/No-Image.jpg`} alt="image not available"/>}
      <div className="category">{props.prod.product.category}</div>
      <b className="related-name">{props.prod.product.name}</b>
      {renderPrice()}
      <Star rating={props.prod.rating}/>
    </div>
  );
};

export default OutfitCard;
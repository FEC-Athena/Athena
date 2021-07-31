import React, { useContext } from 'react';
import Context from '../../context.js';
import Style from './Style.jsx';
import Sku from './Sku.jsx';
import Cart from './Cart.jsx';
import './info.css';


const Info = props => {
  // console.log(this.props.info)
  // const { category } = props.info;
  // const { productStyles, className } = props;
  const { detail, selectedStyle, productStyles } = useContext(Context);

  if (detail && selectedStyle && productStyles) {
    // console.log(detail);
    return (
      <div className={`wrapinfo`}>
        <h1>
          <span className="product-name"> {detail.name} </span>
        </h1>
        <div className="product-category"> {detail.category} </div>
        <i className="fas fa-tshirt"></i> <span className="current-style">Style: {selectedStyle.name}</span>
        <h1>
          <div className="product-price"> ${selectedStyle.original_price} </div>
        </h1>
        <div className="social-share">
          <i className="fab fa-facebook-square icon"></i>
          <i className="fab fa-twitter-square icon"></i>
          <i className="fab fa-pinterest-square icon"></i>
        </div>
        <Style className="product-style" productStyles={productStyles} />
        <Sku productStyles={productStyles} />
        {/* <Cart skus={skus} /> */}
        <Cart />
      </div>
    );
  } else {
    return (
      <div> Info is still loading </div>
    )
  }
}

export default Info;

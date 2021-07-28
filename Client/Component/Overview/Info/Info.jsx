import React from 'react';
import Style from './Style.jsx';
import Sku from './Sku.jsx';
import './info.css';


class Info extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.info)
    const { name, original_price, skus } = this.props.style;
    const { category } = this.props.info;
    const { productStyles, className } = this.props;

    return (
      <div className={`wrapinfo ${className}`}>
        <h1>
          <span className="product-name"> {this.props.info.name} </span>
        </h1>
        <div className="category"> {category} </div>
        <i class="fas fa-tshirt"></i> <span className="current-style">Style: {name}</span>
        <h1>
        <div className="product-price"> ${original_price} </div>
        </h1>
        <Style productStyles={productStyles} />
        <Sku productStyles={productStyles} />
      </div>
    );
  }
}

export default Info;

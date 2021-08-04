import React, { useContext } from 'react';
// import Info from './Info.jsx';
import Context from '../../context.js';

const Style = props => {
  const { handleStyle, selectedStyle, productStyles } = useContext(Context);
  if (selectedStyle === null || productStyles === null) {
    return (
      <div> Style is loading.. </div>
    )
  } else {
    return (
      <div className="all-style">
        {productStyles.map((product, index) => {
          const url = product.photos[0].thumbnail_url;
          return (
            <span key={index} className="iconholder">
              <img key={product.style_id} src={url} className={`styleSelector ${product.style_id === selectedStyle.style_id ? 'active' : ''}`} onClick={() => handleStyle(product)}></img>
              <i className={`far fa-check-circle ${product.style_id === selectedStyle.style_id ? '' : 'hidden'}`}></i>
            </span>
          )
        })}
      </div >
    )
  }
}

export default Style;
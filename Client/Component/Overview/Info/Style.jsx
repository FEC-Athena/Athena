import React, { useContext } from 'react';
// import Info from './Info.jsx';
import Context from '../../context.js';

const Style = props => {
  const { handleStyle, selectedStyle } = useContext(Context);
  // console.log(props.productStyles);
  if (selectedStyle === null) {
    return (
      <div> Style is loading.. </div>
    )
  } else {
    return (
      <div className="all-style">
        {props.productStyles.map((product) => {
          console.log(product.style_id);
          const url = product.photos[0].thumbnail_url;
          return (
            <img key={product.style_id} src={url} className={`styleSelector ${product.style_id === selectedStyle.style_id ? 'active' : ''}`} onClick={() => handleStyle(product)}></img>
          )
        })}
      </div >
    )
  }
}

export default Style;
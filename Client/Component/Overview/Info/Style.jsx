import React, { useContext } from 'react';
// import Info from './Info.jsx';
import Context from '../context.js';

const Style = props => {
  const { handleStyle, selectedStyle } = useContext(Context);
  // console.log(props.productStyles);
  return (
    <div>
      {props.productStyles.map((product) => {
        const url = product.photos[0].thumbnail_url;
        return (
          <img key={product.style_id} src={url} className={`styleSelector ${product.style_id === selectedStyle.style_id ? 'active' : ''}`}  onClick = {() => handleStyle(product) }></img>
  )
})}
    </div >
  )
}

export default Style;
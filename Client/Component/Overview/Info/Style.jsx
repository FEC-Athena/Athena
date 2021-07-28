import React from 'react';
import Info from './Info.jsx';

const Style = props => {

  // console.log(props);
  return (
    <div>
      {props.productStyles.map(product => <button type="button" className="styleSelector"> {product.name} </button>)}
    </div>
  )
}

export default Style;
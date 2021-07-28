import React from 'react';
import Info from './Info.jsx';

const Sku = props => {
  const { skus } = props.productStyles[0];
  // const id = Object.keys(skus);
  const sku = Object.keys(skus).map((item) => ({ id: item, quantity: skus[item].quantity, size: skus[item].size }))
  // console.log(sku);
  return (
    <div>

    </div>
  )
}

export default Sku;
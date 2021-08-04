import React, { useContext } from 'react';
import Context from '../context.js';

const Desc = props => {
  // const { slogan, description } = props.desc;
  const { detail } = useContext(Context);
  if (detail === null) {
    return (
      <div> Description is still loading </div>
    )
  } else {
    return (
      // <div>{props.description}</div>
      <div className="desc">
        <div className="desc-left">
          <h1 className="product-slogan"> {detail.slogan} </h1>
          <div className="product-desc"> {detail.description} </div>
        </div>
        <div className="desc-divider"></div>
        <div className="product-features desc-right">
          <dl>
            {detail.features.map((feature) => {
              return (
              <dt key={feature.feature}><i className="fas fa-check"></i> {feature.feature}: {feature.value} </dt>
              )
            })}
          </dl>
        </div>
      </div>
    )
  }
}

export default Desc;
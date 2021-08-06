import React, { useContext } from 'react';
import Context from '../context.js';

const Desc = props => {
  const { detail } = useContext(Context);
  if (detail === null) {
    return (
      <div> Description is still loading </div>
    )
  } else {
    return (
      <div className="desc">
        <div className="desc-left">
          <h1 className="product-slogan"> {detail.slogan} </h1>
          <div className="product-desc"> {detail.description} </div>
        </div>
        <div className="desc-divider"></div>
        <div className="product-features desc-right">
          <div className="feature-list">
            {detail.features.map((feature) => {
              return (
                <div key={feature.feature}><i className="fas fa-check"></i> {feature.feature}: {feature.value} </div>
              )
            })}
          </div>
          <iframe title="cute-cat" id="catIframe" src="https://zhanyuzhang.github.io/lovely-cat/cat.html"></iframe>
        </div>
      </div>
    )
  }
}

export default Desc;
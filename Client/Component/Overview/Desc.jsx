import React from 'react';
// import Info from './Info.jsx';
// import Overview from './Overview.jsx';

const Desc = props => {
  const { slogan, description } = props.desc;
  return (
    // <div>{props.description}</div>
    <div className="desc">
      <div className="desc-left">
        <h1 className="product-slogan"> {slogan} </h1>
        <div className="product-desc"> {description} </div>
      </div>
      <div className="desc-divider"></div>
      <div className="product-features">
        <dl>
          <dt><i className="fas fa-check"></i>  sheri </dt>
          <dt><i className="fas fa-check"></i>  ran </dt>
          <dt><i className="fas fa-check"></i>  logan </dt>
        </dl>
      </div>
    </div>
  )
}

export default Desc;
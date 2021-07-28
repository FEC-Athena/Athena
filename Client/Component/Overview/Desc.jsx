import React from 'react';
// import Info from './Info.jsx';
// import Overview from './Overview.jsx';

const Desc = props => {
  const { slogan, description } = props.desc;
    return (
      // <div>{props.description}</div>
      <div className="desc">
        <h3> { slogan } </h3>
        <div> { description } </div>
      </div>
    )
}

export default Desc;
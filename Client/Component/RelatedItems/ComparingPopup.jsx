import React, { useContext } from 'react';
import Context from './related-context.js';
import AppContext from '../context.js';

const ComparingPopup = (props) => {
  const { detail } = useContext(AppContext);
  const { handleClosePopup, closeRef } = useContext(Context);
  handleClosePopup(closeRef);

  const relatedChar = props.currentProd.features;
  const currentChar = detail.features;

  let featureArr = [];
  for (let char of currentChar) {
    featureArr.push(char.feature);
  }
  for (let char of relatedChar) {
    if (featureArr.indexOf(char.feature) === -1) {
      featureArr.push(char.feature);
    }
  }

  // console.log(currentChar);

  return (props.trigger) ? (
    <div className="popup" ref={closeRef}>
      <div style={{ fontSize: 12 }}>COMPARING</div>
      <p className="product-short-name">
        <span style={{ float: 'left', marginLeft: 10 }}>current product</span>
        <span style={{ float: 'right', marginRight: 10 }}>selected product</span>
      </p>

      <table className="table">
        <tbody>
          {featureArr.map((current, index) => (
            <tr key={index}>
             <td className="leftCheckmark">{<i className="fas fa-check"></i>}</td>
              <td>{current}</td>
              <td className="rightCheckmark">{<i className="fas fa-check"></i>}</td>
            </tr>
          ))}
          {/* <tr>
            <td>checkmark</td>
            <td>value/features</td>
            <td>checkmark</td>
          </tr> */}
        </tbody>
      </table>

    </div>
  ) : '';
};

export default ComparingPopup;

import React, { useContext } from 'react';
import Context from './related-context.js';
import AppContext from '../context.js';

const ComparingPopup = (props) => {
  const { detail } = useContext(AppContext);
  const { handleClosePopup, closeRef } = useContext(Context);
  handleClosePopup(closeRef);

  // ----- get features for each product -----
  const currentChar = detail.features;
  const relatedChar = props.currentProd.features;
  let currentFeatures = currentChar.map((each) => {
    return each.feature;
  });
  let relatedFeatures = relatedChar.map((each) => {
    return each.feature;
  });

  // ------ get common features --------
  let featureArr = [];
  for (let char of currentChar) {
    featureArr.push(char.feature);
  }
  for (let char of relatedChar) {
    if (featureArr.indexOf(char.feature) === -1) {
      featureArr.push(char.feature);
    }
  }

  return (props.trigger) ? (
    <div className="popup" ref={closeRef}>
      {/* {console.log(featureArr)} */}
      <div style={{ fontSize: 12 }}>COMPARING</div>
      <p className="product-short-name">
        <span style={{ float: 'left', marginLeft: 10 }}>current product</span>
        <span style={{ float: 'right', marginRight: 10 }}>selected product</span>
      </p>

      <table className="table">
        <tbody>
          {featureArr.map((current, index) => (
            <tr key={index}>
             <td className="leftCheckmark">{currentFeatures.includes(current) ? <i className="fas fa-check"></i> : ''}</td>
              <td>{current}</td>
              <td className="rightCheckmark">{relatedFeatures.includes(current) ? <i className="fas fa-check"></i> : ''}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ) : '';
};

export default ComparingPopup;

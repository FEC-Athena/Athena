import React, { useContext, useEffect, useState } from 'react';
import Context from './related-context.js';
import AppContext from '../context.js';

const ComparingPopup = (props) => {
  const { detail } = useContext(AppContext);
  const { handleClosePopup, closeRef } = useContext(Context);
  handleClosePopup(closeRef);
  // const [featureArr, setFeature] = useState([]);
  // const [currentFeatures, setCurrFeat] = useState([]);
  // const [relatedFeatures, setRelFeat] = useState([]);
  let featureArr = [];
  // useEffect(() => {

    // ----- get features for each product -----
    const currentChar = detail.features;
    const relatedChar = props.currentProd.features;
    let currentFeatures = currentChar.map((each) => {
      return each.feature;
    });
    // setCurrFeat(temp1);

    let relatedFeatures = relatedChar.map((each) => {
      return each.feature;
    });
    // setRelFeat(temp2);

    // ------ get common features --------
    for (let char of currentChar) {
      featureArr.push(char.feature);
      // setFeature(featureArr);
    }
    for (let char of relatedChar) {
      if (featureArr.indexOf(char.feature) === -1) {
        featureArr.push(char.feature);
        // setFeature(featureArr);
      }
    }

    // console.log(currentChar, relatedChar);
  // },[props.currentProd.id])

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

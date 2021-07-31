import React, { useContext } from 'react';
import Context from './related-context.js';

const ComparingPopup = (props) => {
  const { handleClosePopup, closeRef } = useContext(Context);
  handleClosePopup(closeRef);

  return (props.trigger) ? (
    <div className="popup" ref={closeRef}>
      <div style={{ fontSize: 12 }}>COMPARING</div>
      <p className="product-short-name">
        <span style={{ float: "left", marginLeft: 10 }}>current product</span>
        <span style={{ float: "right", marginRight: 10 }}>selected product</span>
      </p>

      <table className="table">
        <tbody>
          <tr>
            <td>checkmark</td>
            <td>value/features</td>
            <td>checkmark</td>
          </tr>
        </tbody>
      </table>

    </div>
  ) : '';
};

export default ComparingPopup;
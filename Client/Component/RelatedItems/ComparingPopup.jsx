import React, { useContext } from 'react';
import Context from './related-context.js';

const ComparingPopup = (props) => {
  const { handleClosePopup, closeRef } = useContext(Context);
  handleClosePopup(closeRef);

  return (props.trigger) ? (
    <div className="popup" ref={closeRef}>
      <div style={{ fontSize: 12 }}>COMPARING</div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">current product</th>
            <th scope="col">selected product</th>
          </tr>
        </thead>
      </table>
    </div>
  ) : '';
};

export default ComparingPopup;
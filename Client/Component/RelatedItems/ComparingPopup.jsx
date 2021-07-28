import React, { useRef } from 'react';
// import '../../../dist';

const ComparingPopup = (props) => {
  const closeRef = useRef(null);
  props.ClosePopup(closeRef);

  return (props.trigger) ? (
    <div className="popup" ref={closeRef}>
      <div>COMPARING</div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">current product short name</th>
            <th scope="col">selected product short name</th>
          </tr>
        </thead>
      </table>
    </div>
  ) : '';
};

export default ComparingPopup;
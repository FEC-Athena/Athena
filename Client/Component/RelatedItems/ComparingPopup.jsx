import React from 'react';
// import '../../../dist'

const ComparingPopup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
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
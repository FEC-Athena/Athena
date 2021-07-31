import React, {useContext} from 'react';

const NewReview = (props) => {



  return (props.add) ? (
      <div className="modal">
        <button className="close-button" onClick={props.handleCloseModal}>Close</button>
        <div className="newReview-header">Write Your Review</div>
        <div>about </div>
      </div>
    ) : '';
}

export default NewReview;
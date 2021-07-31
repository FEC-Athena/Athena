import React from 'react';
import StarRating from './StarRating.jsx';
const NewReview = (props) => {

  return (props.add) ? (
      <div className="modal">
        <button className="close-button" onClick={props.handleCloseModal}>Close</button>
        <h3 className="new-review-header">Write Your Review</h3>
        <div>About the "???"</div>
        <div className="overall-rating" style={{color: 'red', marginTop: 20}}>Your overall rating of this product</div>
        <div><StarRating /></div>
        <div style={{marginTop:10}} className="recommend-choice">Do you recommend this product?</div>
        <form>
          <input type="radio" name="choice"/>
          <label>Yes</label>
          <input type="radio" name="choice"/>
          <label>No</label><br></br>
        </form>

        <div>Characteristics</div>

        <form action="/action_page.php">
          <input type="radio" name="size"/>
          <label>A size too small</label>
          <input type="radio" name="size"/>
          <label>A size too small</label>
          <input type="radio" name="size"/>
          <label>Yes</label>
          <input type="radio" name="size"/>
          <label>Yes</label>
          <input type="radio" name="size"/>
          <label>No</label><br></br>
        </form>


        <button style={{fontSize: 15}}>Submit Review</button>
      </div>
    ) : '';
}

export default NewReview;
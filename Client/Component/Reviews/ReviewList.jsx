import React, { useState } from 'react';
import moment from 'moment';
import Star from './Star.jsx';
import VoteHelpfulness from './VoteHelpfulness.jsx';
import Sort from './Sort.jsx';

function ReviewList(props) {

  const [reviewShownCount, setReviewCount] = useState(2);
  const [showButton, setButton] = useState();

  var showReviews = props.data.slice(0, reviewShownCount);

  const handleMoreReviews = () => {
    var showCount = reviewShownCount + 2;
    setReviewCount(showCount);
    if (showCount >= props.data.length) {
      setButton('none');
    }
    showReviews = props.data.slice(0, reviewShownCount);
  }


  return(
    <>
      <Sort data={props.data}/>
      <div>
        {showReviews.map((review) => (
          <div key={review.id}>
            <div style={{marginTop: 40, marginBottom: -40}}><Star rating={review.rating}/></div>
            <div className="individual-review">
              <div style={{fontSize: 30, color: "grey", textAlign: 'right'}}>{review.name}{moment(review.date).format(", MMM Do, YYYY")}</div>
              <div style={{marginTop: 20, fontSize: 33, fontWeight: "bold", color: "#616463"}}>{review.title}</div><br></br>
              <div style={{fontSize: 30, color: "grey"}}>{review.body}</div><br></br>
              <div style={{fontSize: 28, color: "grey"}}><VoteHelpfulness review={review} /></div>
            </div>

          </div>
        ))}
      </div>
      <button className="button" style={{display: showButton}} onClick={handleMoreReviews}>MORE REVIEWS</button>
      <button className="button" >ADD A REVIEW  +</button>
    </>
  )
}


export default ReviewList;
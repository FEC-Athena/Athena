import React from 'react';
import Star from './Star.jsx';
import RatingBreakdown from './RatingBreakdown.jsx';

function ReviewSummary(props) {

  var sum = 0;
  for (var i = 0; i < props.data.length; i++) {
    sum += props.data[i].rating;
  }
  var avg = Math.floor(sum / props.data.length / 0.25) * 0.25;

  return (
    <div  className="reviews-summary">
      <div className="rating-summary">
        <h1>{avg}</h1>
        <div style={{marginTop: 65, marginLeft: 20}}><Star rating={avg} /></div>
      </div>
      <div className="recommendations" style={{fontSize: 30}}>100% of reviews recommend this product</div>
      <div className="rating-breakdown"><RatingBreakdown data={props.data}/></div>
    </div>
  )
}

export default ReviewSummary;
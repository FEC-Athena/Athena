import React from 'react';
import Star from './Star.jsx';

function ReviewSummary(props) {

  var sum = 0;
  for (var i = 0; i < props.data.length; i++) {
    sum += props.data[i].rating;
  }
  var avg = Math.floor(sum / props.data.length / 0.25) * 0.25;

  return (
    <>
      <h1>{avg}</h1>
      <div className="star-summary"><Star rating={avg} /></div>
    </>
  )
}

export default ReviewSummary;
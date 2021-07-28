import React from 'react';
import Star from './Star.jsx';

function ReviewSummary(props) {
  return (
    <>
      <h1>3.5</h1>
      <div className="star-summary"><Star rating={3.5} /></div>
    </>
  )
}

export default ReviewSummary;
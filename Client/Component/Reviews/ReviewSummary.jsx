import React, { useContext } from 'react';
import Star from './Star.jsx';
import ReviewsContext from './reviews-context';
import RatingBreakdown from './RatingBreakdown.jsx';
import FilterTag from './FilterTag.jsx';
import CharBreakdown from './CharBreakdown.jsx';

function ReviewSummary() {
  const list = useContext(ReviewsContext);

  let sum = 0;
  for (let i = 0; i < list.sortByRel.length; i++) {
    sum += list.sortByRel[i].rating;
  }
  const avg = Math.floor(sum / list.sortByRel.length / 0.25) * 0.25;

  return (
    <div className="reviews-summary">
      <div className="rating-summary">
        <h1>{avg}</h1>
        <div className="star-summary"><Star rating={avg} /></div>
      </div>
      <div className="recommendations">100% of reviews recommend this product</div>
      <h5 className="rating-br">Rating Breakdown</h5>
      <div className="filter-tag"><FilterTag /></div>
      <div className="rating-breakdown"><RatingBreakdown /></div>
      <div className="char-breakdown"><CharBreakdown /></div>
    </div>
  )
}

export default ReviewSummary;
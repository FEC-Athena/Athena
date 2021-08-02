import React, { useContext } from 'react';
import Star from './Star.jsx';
import Context from '../context';
import RatingBreakdown from './RatingBreakdown.jsx';
import FilterTag from './FilterTag.jsx';
import CharBreakdown from './CharBreakdown.jsx';

function ReviewSummary() {
  const { currentRating } = useContext(Context);

  return (
    <div className="reviews-summary">
      <div className="rating-summary">
        <h1>{currentRating}</h1>
        <div className="star-summary"><Star rating={currentRating} /></div>
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
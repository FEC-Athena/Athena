import React, {useContext} from 'react';
import ReviewsContext from './reviews-context';

function FilterTag() {
  const {filterToggle, handleFilterToggle, renderList, reviewList, showReviews} = useContext(ReviewsContext);
  var showTags = [];
  for (var key in filterToggle) {
    if(filterToggle[key]) {
      showTags.push(key);
    }
  }

  function handleRemoveFilters() {
    handleFilterToggle();
    renderList('relevant');
    // console.log("removefilter : reviewList ", reviewList)
    // console.log("removefilter : showReviews ", showReviews)
  }

  return (
    <>
      <div className="filter-tag">
        { showTags.map((starCount, idx) => (
          <div className="each-tag" key={idx}>{starCount + ' stars'}</div>
        ))}
      </div>
      <u className="remove-filters" onClick={handleRemoveFilters}>{showTags.length > 0 ? 'Remove all filters' : null}</u>
    </>
  )
}

export default FilterTag;
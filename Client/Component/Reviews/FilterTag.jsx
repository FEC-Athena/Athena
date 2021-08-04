import React, {useContext} from 'react';
import ReviewsContext from './reviews-context';
import Context from '../context';

function FilterTag() {
  const {handleSortOption} = useContext(Context);
  const {filterToggle, clearFilterToggle, renderList, reviewList, showReviews, } = useContext(ReviewsContext);
  var showTags = [];
  for (var key in filterToggle) {
    if(filterToggle[key]) {
      showTags.push(key);
    }
  }

  function handleRemoveFilters() {
    clearFilterToggle();
    renderList('relevant');
    handleSortOption('relevant');
  }
  // console.log("filterTag");
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
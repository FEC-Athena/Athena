import React, { useState } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewSummary from './ReviewSummary.jsx';
import sortData from './sampleData';
import ReviewsContext from './reviews-context';
import FilterTag from './FilterTag.jsx';

function ReviewBox() {
  let { sortByRel, sortByHelpful, sortByNewest } = sortData.sortData;

  sortByRel = sortByRel.results;
  sortByHelpful = sortByHelpful.results;
  sortByNewest = sortByNewest.results;

  const [sortOption, setSortOption] = useState('relevant');
  const handleSortOption = (sortOpt) => (
    setSortOption(sortOpt)
  );

  const [reviewShownCount, setReviewShownCount] = useState(2);
  const handleReviewShownCount = (count) => (setReviewShownCount(count));

  const [reviewList, setReviewList] = useState(sortByRel);
  const handleReviewList = (currList) => (setReviewList(currList));

  const [showButton, setButton] = useState(sortByRel.length > 2);
  const [showReviews, setShowReviews] = useState(sortByRel.slice(0, 2));
  const handleButton = (boolean) => (
    setButton(boolean)
  );
  const handleShowReviews = (list, count) => {
    setShowReviews(list);
    if (count !== undefined) {
      if (count <= 2) {
        handleButton(false);
        setReviewShownCount(count);
      } else {
        handleButton(true);
        setReviewShownCount(2);
      }
    }
  };

  const [filterToggle, setToggle] = useState({
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  });

  const handleFilterToggle = (toggle) => (setToggle(Object.keys(toggle).forEach(v => toggle[v] = false)));

  const [filterList, setFilterList] = useState({});

  function renderOption(sorted) {

    if (sorted.length <= 2) {
      handleButton(false);
    } else {
      handleButton(true);
    }
    handleReviewShownCount(2);
    handleReviewList(sorted);
    handleShowReviews(sorted.slice(0, 2));
  }

  function renderList(sortOpt) {
    if (sortOpt === 'relevant') {
      renderOption(sortByRel);
    } else if (sortOpt === 'helpful') {
      renderOption(sortByHelpful);
    } else if (sortOpt === 'newest') {
      renderOption(sortByNewest);
    }
  }

  const handleToggle = (toggle, starCountList, starCount) => {
    const toggleTemp = toggle;

    toggleTemp[starCount] = !toggleTemp[starCount];
    setToggle(toggleTemp);
    if (toggleTemp[starCount]) {

      filterList[starCount] = starCountList;
      setFilterList(filterList);
      setReviewList(Object.values(filterList).flat());
    } else {
      const temp = filterList;
      delete temp[starCount];
      setFilterList(temp);
      if (Object.keys(temp).length === 0) {
        renderList(sortOption);
        return;
      } else {
        setReviewList(Object.values(temp).flat());
      }
    }

    const tempListFlat = Object.values(filterList).flat();

    handleShowReviews(tempListFlat.slice(0, 2), tempListFlat.length);
  };

  const handleStarFilter = (starCountList, starCount) => {
    handleToggle(filterToggle, starCountList, starCount);
  };

  return (
    <>
      <ReviewsContext.Provider value={{
        sortByRel, sortByNewest, sortByHelpful, showReviews, handleShowReviews, showButton, handleButton, handleStarFilter, reviewShownCount, handleReviewShownCount, reviewList, handleReviewList, handleSortOption, renderList,filterToggle, handleFilterToggle
      }}
      >
        <div className="reviews">
          <p className="reviews-header">RATINGS & REVIEWS</p>
          <div className="reviews-container">
            <div className="summary"><ReviewSummary /></div>
            <div className="reviews-list"><ReviewList /></div>
          </div>
        </div>
      </ReviewsContext.Provider>
    </>
  );
}

export default ReviewBox;

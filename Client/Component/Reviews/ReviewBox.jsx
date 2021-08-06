import React, { useState, useContext, useEffect } from 'react';
import ReviewList from './ReviewList.jsx';
import ReviewSummary from './ReviewSummary.jsx';
import sortData from './sampleData';
import ReviewsContext from './reviews-context';
import Context from '../context';

function ReviewBox(props) {
  const { sortByRel2, sortByHelpful, sortByNewest, sortOption, handleSortOption } = useContext(Context);

  const [reviewShownCount, setReviewShownCount] = useState(2);
  const handleReviewShownCount = (count) => (setReviewShownCount(count));

  const [reviewList, setReviewList] = useState(sortByRel2);

  const handleReviewList = (currList) => (setReviewList(currList));

  // default page: sort option is 'relevant'
  useEffect(() => {
    //setReviewList(sortByRel2);
    clearFilterToggle();
    renderList('relevant');
    handleSortOption('relevant');
  }, [sortByRel2]);

  useEffect(() => {
    setReviewShownCount(2);
    setButton(reviewList.length > 2);
    setShowReviews(reviewList.slice(0, 2));
    // handleSortOption('relevant');
    // renderList('relevant');
  }, [reviewList]);

  // useEffect(() => {

  // }, [reviewShownCount]);

  const [showButton, setButton] = useState(sortByRel2.length > 2);
  const [showReviews, setShowReviews] = useState(reviewList);

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

  const toggleDefault = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
  }
  const [filterToggle, setToggle] = useState(toggleDefault);

  const [filterList, setFilterList] = useState({});

  const clearFilterToggle = () => {
    setToggle(toggleDefault);
    setFilterList({});
  };

  function renderOption(sorted) {
    //console.log("renderOption call")
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
      renderOption(sortByRel2);
    } else if (sortOpt === 'helpful') {
      renderOption(sortByHelpful);
    } else if (sortOpt === 'newest') {
      renderOption(sortByNewest);
    }
  }

  const handleToggle = (toggle, starCountList, starCount) => {

    // set toggle to be on and off upon click
    const toggleTemp = toggle;
    toggleTemp[starCount] = !toggleTemp[starCount];
    setToggle(toggleTemp);
    // if toggle is on
    if (toggleTemp[starCount]) {
      // filterList is an object
      //  { 5: [],
      //      4: [],
      //      3: []
      //   }
      filterList[starCount] = starCountList;
      //console.log("ReviewSummary: startCount:", starCount, "startCountList:", starCountList, " filterList:", filterList);
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
    handleSortOption('relevant');
  };

  const [rating, setRating] = useState(0);
  const handleRating = (rating) => (
    setRating(rating)
  )

  const [newReviewBtn, setNewReviewBtn] = useState(false);
  const handleNewReview = () => (
    setNewReviewBtn(true)
  );

  const handleCloseModal = () => {
    console.log("handleclose")
    setNewReviewBtn(false)
  };

  return (
    <>
      <ReviewsContext.Provider value={{
         showReviews, handleShowReviews, showButton, handleButton, handleStarFilter, reviewShownCount, handleReviewShownCount, reviewList, handleReviewList, renderList,renderOption, filterToggle, clearFilterToggle, rating, handleRating, handleNewReview, handleCloseModal, newReviewBtn
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

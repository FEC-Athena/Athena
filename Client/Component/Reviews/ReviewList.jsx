import React, { useContext } from 'react';
import moment from 'moment';
import Star from './Star.jsx';
import VoteHelpfulness from './VoteHelpfulness.jsx';
import Sort from './Sort.jsx';
import ReviewsContext from './reviews-context';
import NewReview from './NewReview.jsx';
import Context from '../context';

function ReviewList() {
  const { sortByRel2, handleSortOption } = useContext(Context);
  const {
    sortByRel, showReviews, handleShowReviews, showButton, handleButton, reviewShownCount, handleReviewShownCount, reviewList, renderList, newReviewBtn, handleNewReview, handleCloseModal
  } = useContext(ReviewsContext);

  function changeSort(e) {
    //console.log("changeSort: ", e.target.value);
    handleSortOption(e.target.value);
    renderList(e.target.value);
  }

  const handleMoreReviews = () => {
    const showCount = reviewShownCount + 2;
    handleReviewShownCount(showCount);
    if (showCount >= reviewList.length) {
      handleButton(false);
    }
    handleShowReviews(reviewList.slice(0, showCount));
  };
  //console.log("recSelec2")

  return (
    <div className="reviews-fixedH-container">
      <div><Sort data={sortByRel2} changeSort={changeSort} /></div>

      <div className="all-reviews">
        {showReviews.map((review) => (
          <div key={review.review_id}>
            <div style={{ marginTop: 40, marginBottom: -40 }}><Star rating={review.rating} /></div>
            <div className="individual-review">
              <div style={{ color: 'grey', textAlign: 'right' }}>
                {review.reviewer_name}
                {moment(review.date).format(', MMM Do, YYYY')}
              </div>
              <div style={{ marginTop: 30, fontWeight: 'bold', color: '#3e3f3f' }}>{review.summary}</div>
              <br />
              <div style={{ color: 'grey', width: 455, overflowWrap: 'break-word' }}>{review.body}</div>
              <br />
              <div>{review.recommend ?
                <div><i className="fas fa-check recommended" style={{marginRight: 5}}></i>I recommended this product</div> : ''
              }</div><br></br>
              <div>{review.photos ? (review.photos.map((photo, idx) => (
                <img
                key={idx} src={photo.url} alt="new" style={{height: 100, width: 100, padding: 5, objectFit: 'cover'}}
                />
              ))) : ''}</div>
              <div style={{ color: 'grey' }}><VoteHelpfulness review={review} /></div>
            </div>
          </div>
        ))}
      </div>

        {showButton ? <button className="button" onClick={handleMoreReviews}>MORE REVIEWS</button> : null}

        <button className="button" onClick={() => handleNewReview()}>ADD A REVIEW  +</button>
        <NewReview add={newReviewBtn} handleCloseModal={handleCloseModal}/>
    </div>
  );
}

export default ReviewList;

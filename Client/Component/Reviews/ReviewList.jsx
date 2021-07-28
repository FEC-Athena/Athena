import React, { useState } from 'react';
import moment from 'moment';
import Star from './Star.jsx';
import VoteHelpfulness from './VoteHelpfulness.jsx';
import Sort from './Sort.jsx';
import sortByRe from './sampleData.js';
import sortByHelpful from './sampleData.js';

function ReviewList(props) {

  const [reviewShownCount, setReviewCount] = useState(2);
  const [showButton, setButton] = useState();
  const [sortOption, setSortOption] = useState('relevant');
  const [reviewList, setReviewList] = useState(sortByRe.sortByRe.results);
  const [showReviews, setShowReviews] = useState(reviewList.slice(0, 2));


  //sort the review list then slice


  // componentDidMount() {
  //   axios.get()
  // }
  function changeSort(e) {
    setSortOption(e.target.value);
    renderList(e.target.value);
  }

  function renderList(sortOption) {

    console.log("renderList?", sortOption);
    if (sortOption === 'helpful') {
      setReviewList(sortByHelpful.sortByHelpful.results);
      setShowReviews(sortByHelpful.sortByHelpful.results.slice(0, 2));
    }
    console.log(reviewList);
  }

  const handleMoreReviews = () => {
    var showCount = reviewShownCount + 2;
    setReviewCount(showCount);
    if (showCount >= reviewList.length) {
      setButton('none');
    }
    console.log(showCount);

    setShowReviews(reviewList.slice(0, showCount));
    console.log(showReviews);
  }


  return(
    <>
      <Sort data={props.data} changeSort={changeSort} />

      <div>
        {showReviews.map((review) => (
          <div key={review.id}>
            <div style={{marginTop: 40, marginBottom: -40}}><Star rating={review.rating}/></div>
            <div className="individual-review">
              <div style={{fontSize: 30, color: "grey", textAlign: 'right'}}>{review.reviewer_name}{moment(review.date).format(", MMM Do, YYYY")}</div>
              <div style={{marginTop: 20, fontSize: 33, fontWeight: "bold", color: "#3e3f3f"}}>{review.title}</div><br></br>
              <div style={{fontSize: 30, color: "grey"}}>{review.body}</div><br></br>
              <div style={{fontSize: 28, color: "grey"}}><VoteHelpfulness review={review} /></div>
            </div>

          </div>
        ))}
      </div>
      <button className="button" style={{display: showButton}} onClick={handleMoreReviews}>MORE REVIEWS</button>
      <button className="button" >ADD A REVIEW  +</button>
    </>
  )
}


export default ReviewList;
import React, { useState, useContext } from 'react';
import ProgressBar from './ProgressBar.jsx';
import ReviewsContext from './reviews-context';
import Context from '../context';

function RatingBreakdown() {
  let fiveStar = 0, fourStar = 0, threeStar = 0, twoStar = 0, oneStar = 0;
  const { sortByRel, handleStarFilter } = useContext(ReviewsContext);
  const { sortByRel2 } = useContext(Context);
  //console.log("ratingbr: ", sortByRel2)
  const fiveStarList = []; const fourStarList = []; const threeStarList = []; const twoStarList = []; const oneStarList = [];


  for (let i = 0; i < sortByRel2.length; i++) {
    if (sortByRel2[i].rating === 5) {
      fiveStar++;
      fiveStarList.push(sortByRel2[i]);
    } else if (sortByRel2[i].rating >= 4) {
      fourStar++;
      fourStarList.push(sortByRel2[i]);
    } else if (sortByRel2[i].rating >= 3) {
      threeStar++;
      threeStarList.push(sortByRel2[i]);
    } else if (sortByRel2[i].rating >= 2) {
      twoStar++;
      twoStarList.push(sortByRel2[i]);
    } else {
      oneStar++;
      oneStarList.push(sortByRel2[i]);
    }
  }

  const length = sortByRel2.length;
  const fiveBar = (length === 0 ? 0 : fiveStar / length);
  const fourBar = (length === 0 ? 0 : fourStar / length);
  const threeBar = (length === 0 ? 0 : threeStar / length);
  const twoBar = (length === 0 ? 0 : twoStar / length);
  const oneBar = (length === 0 ? 0 : oneStar / length);


  return (
    <div>
      <div onClick={() => handleStarFilter(fiveStarList, 5)}><ProgressBar starNum="5 stars" percentage={fiveBar} count={fiveStar} /></div>
      <div onClick={() => handleStarFilter(fourStarList, 4)}><ProgressBar starNum="4 stars" percentage={fourBar} count={fourStar} /></div>
      <div onClick={() => handleStarFilter(threeStarList, 3)}><ProgressBar starNum="3 stars" percentage={threeBar} count={threeStar} /></div>
      <div onClick={() => handleStarFilter(twoStarList, 2)}><ProgressBar starNum="2 stars" percentage={twoBar} count={twoStar} /></div>
      <div onClick={() => handleStarFilter(oneStarList, 1)}><ProgressBar starNum="1 stars" percentage={oneBar} count={oneStar} /></div>
    </div>

  );
}

export default RatingBreakdown;

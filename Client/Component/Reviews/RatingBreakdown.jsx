import React, { useState, useContext } from 'react';
import ProgressBar from './ProgressBar.jsx';
import ReviewsContext from './reviews-context';

function RatingBreakdown() {
  let fiveStar = 0, fourStar = 0, threeStar = 0, twoStar = 0, oneStar = 0;
  const { sortByRel, handleStarFilter } = useContext(ReviewsContext);
  const fiveStarList = []; const fourStarList = []; const threeStarList = []; const twoStarList = []; const oneStarList = [];


  for (let i = 0; i < sortByRel.length; i++) {
    if (sortByRel[i].rating === 5) {
      fiveStar++;
      fiveStarList.push(sortByRel[i]);
    } else if (sortByRel[i].rating >= 4) {
      fourStar++;
      fourStarList.push(sortByRel[i]);
    } else if (sortByRel[i].rating >= 3) {
      threeStar++;
      threeStarList.push(sortByRel[i]);
    } else if (sortByRel[i].rating >= 2) {
      twoStar++;
      twoStarList.push(sortByRel[i]);
    } else {
      oneStar++;
      oneStarList.push(sortByRel[i]);
    }
  }
  const fiveBar = fiveStar / sortByRel.length;
  const fourBar = fourStar / sortByRel.length;
  const threeBar = threeStar / sortByRel.length;
  const twoBar = twoStar / sortByRel.length;
  const oneBar = oneStar / sortByRel.length;

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

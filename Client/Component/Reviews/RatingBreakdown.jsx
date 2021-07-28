import React, { useState } from 'react';
import ProgressBar from './ProgressBar.jsx';

function RatingBreakdown (props) {
  var fiveStar = 0, fourStar = 0, threeStar = 0, twoStar = 0, oneStar = 0;
  var data = props.data;

  for (var i = 0; i <data.length; i++) {
    if (data[i].rating === 5) {
      fiveStar++;
    } else if (data[i].rating >= 4) {
      fourStar++;
    } else if (data[i].rating >=3) {
      threeStar++;
    } else if (data[i].rating >= 2) {
      twoStar++;
    } else {
      oneStar++;
    }
  }
  var fiveBar = fiveStar/data.length;
  var fourBar = fourStar/data.length;
  var threeBar = threeStar/data.length;
  var twoBar = twoStar/data.length;
  var oneBar = oneStar/data.length;


  return (
    <div>
      <ProgressBar starNum='5 stars' percentage={fiveBar} />
      <ProgressBar starNum='4 stars' percentage={fourBar} />
      <ProgressBar starNum='3 stars' percentage={threeBar} />
      <ProgressBar starNum='2 stars' percentage={twoBar} />
      <ProgressBar starNum='1 stars' percentage={oneBar} />
    </div>

  )
}

export default RatingBreakdown;
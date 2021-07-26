import React from 'react';
import starOutline from './Images/star.png';

function Star (props) { //4.5
  var stars = []
  var score = props.rating;
  for (var i = 0; i < 5; i++) {
    if (score >= 1) {
      stars.push(1);
    } else if (score > 0 && score < 1){
      // for visual effects
      if(score === 0.25) {
        score = 0.35;
      }
      if(score === 0.75) {
        score = 0.7;
      }

      stars.push(score);
    } else {
      stars.push(0);
    }
    score--;
  }
  //stars = [1, 1, 1, 1, 0.5]; //4.5
  return (
    <div>{stars.map((star, i) =>
      (
        <div className="single-star-container" key={i}>
            <div className="single-star-fill" style={{"width" : `${parseInt(star*21)}px`}}>
                <img className="single-star-outline" src={starOutline}></img>
            </div>
        </div>
      ))}</div>
  )
}

export default Star;
import React from 'react';
import starOutline from './Images/star.png';
import Context from '../context.js';

function Star(props) {
  const stars = [];
  let score = props.rating;
  for (let i = 0; i < 5; i++) {
    if (score >= 1) {
      stars.push(1);
    } else if (score > 0 && score < 1) {
      // for visual effects
      if (score === 0.25) {
        score = 0.45;
      }

      if (score === 0.5) {
        score = 0.62;
      }

      if (score === 0.75) {
        score = 0.7;
      }

      stars.push(score);
    } else {
      stars.push(0);
    }
    score--;
  }
  // stars = [1, 1, 1, 1, 0.5]; //4.5
  return (
    <div>
      {stars.map((star, i) => (
        <div className="single-star-container" key={i}>
          <div className="single-star-fill" style={{ width: `${parseInt(star * 18)}px`}}>
            <img className="single-star-outline" src={starOutline} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Star;

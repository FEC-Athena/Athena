import React from 'react';

function ProgressBar(props) {
  function MouseOver(event) {
    event.target.style.background = '#E9E9E9';
  }

  function MouseOut(event) {
    event.target.style.background = '';
  }

  function MouseOverBar(event) {
    event.target.style.border = '2px solid grey';
  }
  function MouseOutBar(event) {
    event.target.style.border = '';
  }

  return (
    <div className="rating-breakdown">
      <u className="progress-text" onMouseOver={MouseOver} onMouseOut={MouseOut}>{props.starNum}</u>
      <div><progress onMouseOver={MouseOverBar} onMouseOut={MouseOutBar} value={props.percentage * 100} max="100" /></div>
      <u onMouseOver={MouseOver} onMouseOut={MouseOut}>{props.count} reviews</u>
    </div>
  );
}

export default ProgressBar;

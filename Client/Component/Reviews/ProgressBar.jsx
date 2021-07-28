import React from 'react';

function ProgressBar (props) {
  console.log(props.percentage);
  return (
    <div className="rating-breakdown">
      <u className="progress-text">{props.starNum}</u>
      <progress value={props.percentage*100} max="100"></progress>

    </div>
  );
}


export default ProgressBar;
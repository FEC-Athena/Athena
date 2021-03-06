import React, { useState } from 'react';

function VoteHelpfulness(props) {
  //console.log(props.review.helpfulness);
  const [yesCount, setYesCount] = useState(props.review.helpfulness);
  const [noCount, setNoCount] = useState(0);
  const [report, setReport] = useState(false);
  const handleReportClick = () => {
    setReport(!report);
  };

  return (
    <div>
      <label>Was this review helpful? </label>
      <u onClick={() => setYesCount(yesCount + 1)}>Yes </u>
      ({yesCount})
      <u onClick={() => setNoCount(noCount + 1)}> No </u>
      ({noCount})
      <label> | </label>
      <u onClick={handleReportClick}>{report ? 'Reported' : 'Report'}</u>
    </div>
  );
}

export default VoteHelpfulness;

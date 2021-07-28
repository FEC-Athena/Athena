import React from 'react';
import AnswerElement from './AnswerElement.jsx';

function AnswersList(props) {
  const { answers } = props;
  answers.sort((a, b) => b.helpfulness - a.helpfulness);
  const sortedAnswers = answers.map((answer) => <AnswerElement answer={answer} />);
  return (
    <>
      {sortedAnswers}
    </>
  );
}

export default AnswersList;
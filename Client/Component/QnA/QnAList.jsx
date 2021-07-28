import React from 'react';
import QuestionElement from './QuestionElement.jsx';

// refactor to map over each question
function QnAList(props) {
  const { questions } = props;
  // should map over the questions and pass questiondata to questions.jsx
  questions.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
  const questionList = questions.map((question) => (
    <QuestionElement question={question} key={question.question_id} />
  ));
  return (
    <>
      {questionList}
    </>
  );
}

export default QnAList;


// questions.sort((a, b) => b.question_helpfulness - a.question_helpfulness);
// const listQuestions = questions.map(({ question_body, answers, question_helpfulness }) => {
//   const sortedAnswers = Object.values(answers);
//   sortedAnswers.sort((a, b) => b.helpfulness - a.helpfulness)
//   const listAnswers = sortedAnswers.map(({ body, helpfulness }) => (
//     <>
//       <div>
//         A:
//         {body}
//         {helpfulness}
//       </div>
//     </>
//   ))

//   return (
//     <div>
//       <span>Q:</span>
//       <span>{question_body} {question_helpfulness}</span>
//       <span>{listAnswers}</span>
//     </div>
//   )});
// return (
//   <ul>{listQuestions}</ul>
// );
import React from 'react';
import AnswersList from './AnswersList.jsx';

function QuestionElement(props) {
  const { question } = props;
  const { question_body, question_id, asker_name, answers, date } = question;
  return (
    <div className="Question" key={question_id}>
      <h3>
        Q:
        {question_body}
      </h3>
      <p>User: <span>{asker_name}</span> Date: {date}</p>
      <>
        <AnswersList answers={Object.values(answers)} />
      </>

    </div>
  );
}

export default QuestionElement;

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
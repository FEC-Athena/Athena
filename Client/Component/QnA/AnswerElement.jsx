import React from 'react';

function AnswerElement(props) {
  const { answer } = props;
  const { id, body, date, answerer_name, helpfulness, photos } = answer;
  return (
    <>
      <h3>
        A:
        {body}
      </h3>
      <p> User: {answerer_name} Date: {date}</p>
    </>
  );
}

export default AnswerElement;

// id: 1719777,
// body: 'fdsaf',
// date: '2021-04-28T00:00:00.000Z',
// answerer_name: "Austin's House",
// helpfulness: 0,
// photos: [
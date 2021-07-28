import React from 'react';
import QnAList from './QnAList.jsx';
import QnASearch from './QnASearch.jsx';

function QnA() {
  const dummyData = {
    product_id: '17068',
    results: [
      {
        question_id: 104606,
        question_body: 'Where does this product ship from?',
        question_date: '2018-01-06T00:00:00.000Z',
        asker_name: 'jbilas',
        question_helpfulness: 28,
        reported: false,
        answers: {
          992115: {
            id: 992115,
            body: 'It ships from the facility in Tulsa',
            date: '2018-01-06T00:00:00.000Z',
            answerer_name: 'dschulman',
            helpfulness: 26,
            photos: [],
          },
          1719733: {
            id: 1719733,
            body: 'fdsafdsa',
            date: '2021-04-28T00:00:00.000Z',
            answerer_name: 'fdsfdsa',
            helpfulness: 0,
            photos: [
              'blob:http://localhost:3000/5e5586b8-503a-4ed4-a41c-7bf6f06f05d2',
            ],
          },
          1719775: {
            id: 1719775,
            body: 'ddhshshd',
            date: '2021-04-28T00:00:00.000Z',
            answerer_name: 'd',
            helpfulness: 0,
            photos: [],
          },
        },
      },
      {
        question_id: 104608,
        question_body: 'What fabric is the bottom made of?',
        question_date: '2019-02-18T00:00:00.000Z',
        asker_name: 'cleopatra',
        question_helpfulness: 10,
        reported: false,
        answers: {
          992127: {
            id: 992127,
            body: 'Its a rubber sole',
            date: '2019-03-18T00:00:00.000Z',
            answerer_name: 'marcanthony',
            helpfulness: 7,
            photos: [],
          },
          1443470: {
            id: 1443470,
            body: 'Gareth is really great at that',
            date: '2021-03-06T00:00:00.000Z',
            answerer_name: 'Gareth',
            helpfulness: 1,
            photos: [],
          },
        },
      },
      {
        question_id: 104605,
        question_body: 'Why is this product cheaper here than other sites?',
        question_date: '2018-04-24T00:00:00.000Z',
        asker_name: 'toofast',
        question_helpfulness: 7,
        reported: false,
        answers: {},
      },
      {
        question_id: 104604,
        question_body: "I'm allergic to dye #17, does this product contain any?",
        question_date: '2019-01-24T00:00:00.000Z',
        asker_name: 'l33tgamer',
        question_helpfulness: 7,
        reported: false,
        answers: {
          1719777: {
            id: 1719777,
            body: 'fdsaf',
            date: '2021-04-28T00:00:00.000Z',
            answerer_name: "Austin's House",
            helpfulness: 0,
            photos: [
              'blob:http://localhost:3000/34817608-f707-4624-ba4f-2fe9aeaaf014',
            ],
          },
        },
      },
      {
        question_id: 104609,
        question_body: 'Where is this product made?',
        question_date: '2018-10-04T00:00:00.000Z',
        asker_name: 'jbilas',
        question_helpfulness: 4,
        reported: false,
        answers: {
          992109: {
            id: 992109,
            body: 'China',
            date: '2018-08-04T00:00:00.000Z',
            answerer_name: 'Seller',
            helpfulness: 8,
            photos: [],
          },
        },
      },
    ],
  };
  return (
    <>
      <p>QnA</p>
      <QnASearch />
      <QnAList questions={dummyData.results} />
    </>
  );
}

export default QnA;

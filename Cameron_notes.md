# Questions and Answers

- [x] grab data to hard-code from api
- [x] create a QnAListElement Component
- [x] create hard coded list of elements in the QnA component
- [x] pass hard coded list as props to QnA list
- [x] QnAListElement component should loop over the data and display it on the DOM
- [x] QnAListElement componenet should show answers for every question that has answers
- [] QnA List should have a state called ShortList set to a default value of true
- [] if the user clicks a button 'load more questions' it should set ShortList to false
- [] when ShortList is false Should display more than just the top 4 questions
///////////////////////////////////
- [x] refactor QnA list to work better
- [x] question component should be a child of qna list
- [x] create a QuestionElement componenet pass all question information including answers
- [x] create an AnswersList Component should be a child of Question
- [x] create an AnswerElement Componenet should be a child of AnswersList
///////////////////////////////////
# Questions
- can I get the data from the api call to begin with?

## api cheat sheet
- general: http://example.com/page?parameter=value&also=another

- get all products: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products
- get product's questions: https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa/questions?product_id=[id]



- challenge: trying to figure out how to display answer data.

- action:
  - tried to map over the data but answers are stored in an object
  - tried adding .values() to answers but I think it breaks when there are no properties in answers

- resolution:
  - I was using Object.values() wrong. purely syntatical

- challenge: I found my code was only really using like two components and the logic is probably more complicated than that

- action: I wrote up how I think the componenets should interact with one another and followed it based on the code I had already written.

- resolution: My code makes more sense now and has a cleaner look and there is a clear and defined componet chain.
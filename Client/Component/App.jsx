import React from 'react';
<<<<<<< HEAD
import QnA from './QnA/QnA.jsx';
=======
import RelatedList from './RelatedItems/RelatedList.jsx';
import OutfitList from './RelatedItems/OutfitList.jsx';

>>>>>>> main
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {

  }

  render() {
    return (
<<<<<<< HEAD
      <>
      <div> Sheri, Cameron and Ran HIA HIA HIA </div>
      {/* // <Overview />
      // <Rating /> */}
      < QnA />

      {/* // <Comparison /> */}
      </>
=======
      <div>
      {/* // <Overview />
      // <Rating />
      // <QA /> */}
        <RelatedList />
        <OutfitList />
      </div>
>>>>>>> main
    )
  }
}

export default App;
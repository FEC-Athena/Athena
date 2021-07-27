import React from 'react';
import RelatedList from './RelatedItems/RelatedList.jsx';
import OutfitList from './RelatedItems/OutfitList.jsx';

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
      <div>
      {/* // <Overview />
      // <Rating />
      // <QA /> */}
        <RelatedList />
        <OutfitList />
      </div>
    )
  }
}

export default App;
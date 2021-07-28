import React from 'react';
import ReviewBox from './Reviews/ReviewBox.jsx';

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
      //<div> Sheri, Cameron and Ran HIA HIA HIA </div>
      // <Overview />
      <ReviewBox />
      // <QA />
      // <Comparison />
    )
  }
}

export default App;
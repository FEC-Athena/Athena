import React from 'react';
import QnA from './QnA/QnA.jsx';
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
      <>
      <div> Sheri, Cameron and Ran HIA HIA HIA </div>
      {/* // <Overview />
      // <Rating /> */}
      < QnA />

      {/* // <Comparison /> */}
      </>
    )
  }
}

export default App;
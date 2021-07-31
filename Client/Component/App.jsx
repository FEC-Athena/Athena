import React from 'react';
import ReviewBox from './Reviews/ReviewBox.jsx';
import Overview from './Overview/Overview.jsx';
import QnA from './QnA/QnA.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import api from './config.js';
// const App = () => {

// };

const config = {
  headers: { 'Authorization': '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' }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    // axios.get('/products')
    //   .then((data) => {
    //     this.setState({ product: data })
    //   })
  }

  render() {
    return (
      <div className="app">
        <Overview />
        <RelatedItems />
        <ReviewBox />
        <QnA />
      </div>
    )
  }
}

export default App;
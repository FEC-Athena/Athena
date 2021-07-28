import React from 'react';
import ReviewBox from './Reviews/ReviewBox.jsx';
import Overview from './Overview/Overview.jsx';
import QnA from './QnA/QnA.jsx';
import RelatedList from './RelatedItems/RelatedList.jsx';
import OutfitList from './RelatedItems/OutfitList.jsx';

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
      <div>
        <Overview />
        <RelatedList />
        <OutfitList />
        <ReviewBox />
        <QnA />
      </div>
    )
  }
}

export default App;
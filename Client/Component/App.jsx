import React from 'react';
import Overview from './Overview/Overview.jsx';

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
      <Overview />
      // <Rating />
      // <QA />
      // <Comparison />
    )
  }
}

export default App;
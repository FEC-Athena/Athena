import React, { useState, useEffect, useContext } from 'react';
import Context from './context.js'
import ReviewBox from './Reviews/ReviewBox.jsx';
import Overview from './Overview/Overview.jsx';
import QnA from './QnA/QnA.jsx';
import RelatedList from './RelatedItems/RelatedList.jsx';
import OutfitList from './RelatedItems/OutfitList.jsx';
import axios from 'axios';

const App = props => {

  const [detail, setDetail] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [productStyles, setProductStyles] = useState(null);

  useEffect(() => {
    const config = {
      headers: { Authorization: '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' }
    };

    // axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/17067', config)
    //   .then((res) => {
    //     setDetail(res.data)
    //     setLoading(false);
    //   })
    //   .catch(err => console.log('1st err'))

    // axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/17067/styles', config)
    //   .then((res) => {
    //     setProductStyles(res.data.results)
    //     setSelectedStyle(res.data.results[0])
    //     setLoading(false);
    //   })
    //   .catch(err => console.log('err'))

    let one = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/17067';
    let two = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/17067/styles';

    const req1 = axios.get(one, config);
    const req2 = axios.get(two, config);

    axios.all([req1, req2])
      .then(axios.spread((...responses) => {
        const res1 = responses[0];
        const res2 = responses[1];
        setDetail(res1.data)
        setLoading(false)
        setProductStyles(res2.data.results)
        setSelectedStyle(res2.data.results[0])
      }))
      .catch(errors => {
        console.log(errors)
      })
  }, [])

  if (isLoading) {
    return (
      <div id="Home-error"> Homepage is loading.. </div>
    )
  }
  // console.log(selectedStyle)
  return (
    <Context.Provider value={{
      selectedStyle, setSelectedStyle, detail, productStyles, setProductStyles, isLoading, setLoading
    }}>
      <div className="app">
        <Overview />
        {/* <RelatedList />
        <OutfitList />
        <ReviewBox />
        <QnA /> */}
      </div>
    </Context.Provider>
  )
}

export default App;


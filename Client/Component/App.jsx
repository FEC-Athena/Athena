import React, { useState, useEffect, useContext } from 'react';
import Context from './context.js'
import ReviewBox from './Reviews/ReviewBox.jsx';
import Overview from './Overview/Overview.jsx';
import QnA from './QnA/QnA.jsx';
import RelatedList from './RelatedItems/RelatedList.jsx';
import OutfitList from './RelatedItems/OutfitList.jsx';
import axios from 'axios';
import access from './config.js';

const App = props => {
  // 当前产品普通信息
  const [detail, setDetail] = useState(null);
  // 判断数据是否成功被读取
  const [isLoading, setLoading] = useState(true);
  // 当前产品被选中的 Style
  const [selectedStyle, setSelectedStyle] = useState(null);
  // 当前产品所有的 Style
  const [productStyles, setProductStyles] = useState(null);
  // 当前产品的产品 ID
  const [currentItem, setCurrent] = useState(17067);


  // Logan 专用的 Func
  const handleStyle = target => setSelectedStyle(target);
  //

  // Sheri 专用的 Func

  //

  // Ran 专用的 Func

  //

  useEffect(() => {
    const config = {
      headers: { Authorization: `${access.TOKEN}` }
    };
    // console.log(process.env.TOKEN)
    let pro_gen = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}`;
    // 17068,
    // 17069,
    // 17074,
    // 17073
    let pro_sty = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}/styles`;

    const reqGen = axios.get(pro_gen, config);
    const reqSty = axios.get(pro_sty, config);

    axios.all([reqGen, reqSty])
      .then(axios.spread((...responses) => {
        const resGen = responses[0];
        const resSty = responses[1];
        setDetail(resGen.data)
        setLoading(false)
        setProductStyles(resSty.data.results)
        setSelectedStyle(resSty.data.results[0])
      }))
      .catch(errors => {
        console.log(errors)
      })
  }, [currentItem])

  if (isLoading) {
    return (
      <div id="Home-error"> Homepage is loading.. </div>
    )
  }
  // console.log(selectedStyle)
  return (
    <Context.Provider value={{
      selectedStyle, setSelectedStyle, detail, productStyles, setProductStyles, isLoading, setLoading, handleStyle
    }}>
      <div className="app">
        <Overview />
        <RelatedList />
        <OutfitList />
        <ReviewBox />
        <QnA />
      </div>
    </Context.Provider>
  )
}

export default App;


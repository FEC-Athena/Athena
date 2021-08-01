import React, { useState, useEffect, useContext } from 'react';
import Context from './context.js'
import ReviewBox from './Reviews/ReviewBox.jsx';
import Overview from './Overview/Overview.jsx';
import QnA from './QnA/QnA.jsx';
import axios from 'axios';
import access from './config.js';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

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
  // 当前产品默认格式评论
  const [currentRating, setRating] = useState(null);

  // const { currentRev, serRev } = useContext(Context);
  // useEffect(() => {
  // axios
  //},[currentRev])

  // Logan 专用的 Func
  const handleStyle = target => setSelectedStyle(target);
  //

  // Sheri 专用的 Func

  //

  // Ran 专用的 Func

  //

  // useEffect(() => {
  //   const config = {
  //     headers: { Authorization: `${access.TOKEN}` }
  //   };
  //   // console.log(access.TOKEN)
  //   let pro_gen = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}`;

  //   let pro_sty = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}/styles`;

  //   let pro_related = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}/related`;

  //   const reqGen = axios.get(pro_gen, config);
  //   const reqSty = axios.get(pro_sty, config);
  //   const reqRel = axios.get(pro_related, config);

  //   axios.all([reqGen, reqSty])
  //     .then(axios.spread((...responses) => {
  //       const resGen = responses[0];
  //       const resSty = responses[1];
  //       console.log(resGen);
  //       setDetail(resGen.data)
  //       setLoading(false)
  //       setProductStyles(resSty.data.results)
  //       setSelectedStyle(resSty.data.results[0])
  //     }))
  //     .catch(errors => {
  //       console.log(errors)
  //     })
  // }, [])

  // /*
  //   axios.get(/related)
  //     .then((list) => {
  //       list.map((item) => {
  //         axios.get(https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${item}/)
  //         axios.get(https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${item}/styles)
  //         axios.get(https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${item})
  //       })
  //     })
  // */
  // if (isLoading) {
  //   return (
  //     <div id="Home-error"> Homepage is loading.. </div>
  //   )
  // }

  return (
    <Context.Provider value={{
      selectedStyle, detail, productStyles, setProductStyles, isLoading, setLoading, handleStyle, currentRating, setRating, currentItem, setCurrent
    }}>
      <div className="app">
        <Overview />
        <RelatedItems />
        <ReviewBox />
        <QnA />
      </div>
    </Context.Provider>
  )
}

export default App;


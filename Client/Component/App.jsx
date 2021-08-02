/* eslint-disable no-await-in-loop */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Context from './context.js';
import ReviewBox from './Reviews/ReviewBox.jsx';
import Overview from './Overview/Overview.jsx';
import QnA from './QnA/QnA.jsx';
import access from './config.js';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import "core-js/stable";
import "regenerator-runtime/runtime";

const App = () => {
  const config = {
    headers: { Authorization: `${access.TOKEN}` },
  };
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

  // ------------sheri---------------
  const [relatedItems, setRelatedItems] = useState([]);
  // const [relatedStyles, setRelatedStyles] = useState([]);

  // Logan 专用的 Func
  const handleStyle = (target) => setSelectedStyle(target);
  //
  const handleCurrent = (target) => setCurrent(target);
  // ---------- Sheri 专用的 Func -----------
  const handleProductById = async (id) => {
    try {
      const { data } = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}`, config);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleStyleById = async (id) => {
    try {
      const { data } = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${id}/styles`, config);
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleRatingById = async (id) => {
    try {
      const { data } = await axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta?product_id=${id}`, config);
      return data;
    } catch (err) {
      console.log(err);
    }
  };
  //----------------------------------

  // Ran 专用的 Func

  //

  useEffect(async () => {
    const pro_gen = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}`;
    const pro_sty = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}/styles`;
    const pro_related = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}/related`;

    const reqGen = axios.get(pro_gen, config);
    const reqSty = axios.get(pro_sty, config);

    axios.all([reqGen, reqSty])
      .then(axios.spread((...responses) => {
        const resGen = responses[0];
        const resSty = responses[1];
        setDetail(resGen.data);
        setLoading(false);
        setProductStyles(resSty.data.results);
        setSelectedStyle(resSty.data.results[0]);
      }))
      .catch((errors) => {
        console.log(errors);
      });

    // --------------- sheri ---------------
    const { data } = await axios.get(pro_related, config);
    const dataArr = [];

    for (let id of data) {
      const product = await handleProductById(id);
      const style = await handleStyleById(id);
      const rating = await handleRatingById(id);
      dataArr.push({ product, style, rating });
    }
    setRelatedItems(dataArr);

    // const flattenData = dataArr.reduce((acc, newItem) => {
    //   return [...acc, ...newItem.style.results.map(item => (
    //     {...item, id: newItem.product_id}
    //   ))]
    // }, []);
    // setRelatedStyles(flattenData);


  }, [currentItem]);



  // console.log('this is from app', relatedItems);


  if (isLoading) {
    return (
      <div id="Home-error"> Homepage is loading.. </div>
    );
  }

  return (
    <Context.Provider value={{
      selectedStyle,
      detail,
      productStyles,
      setProductStyles,
      isLoading,
      setLoading,
      handleStyle,
      currentRating,
      setRating,
      currentItem,
      relatedItems,
      handleCurrent
    }}
    >
      <div className="app">
        <Overview />
        <RelatedItems />
        <ReviewBox />
        <QnA />
      </div>
    </Context.Provider>
  );
};

export default App;

import React, { useState, useEffect, Suspense } from 'react';
// needed support
import axios from 'axios';
import Context from './context';
import access from './config.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

// Components
import Overview from './Overview/Overview.jsx';
// const RelatedItems = React.lazy(() => import('./RelatedItems/RelatedItems.jsx'));
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import ReviewBox from './Reviews/ReviewBox.jsx';
import QnA from './QnA/QnA.jsx';

const App = () => {
  const config = {
    headers: { Authorization: `${access.TOKEN}` },
  };
  // current item '/product/id'
  const [detail, setDetail] = useState(null);
  const [isLoading, setLoading] = useState(true);
  // the first style of the current item
  const [selectedStyle, setSelectedStyle] = useState(null);
  // all the styles of the current item
  const [productStyles, setProductStyles] = useState(null);
  const [currentItem, setCurrent] = useState(17067);
  const [currentRating, setRating] = useState(0);
  const [revNum, setRevnum] = useState(0);

  // ------------sheri---------------
  const [relatedItems, setRelatedItems] = useState([]);
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  // Logan Func
  const handleStyle = (target) => setSelectedStyle(target);
  //
  const handleCurrent = (target) => setCurrent(target);
  // ---------- Sheri Func -----------
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
  // ----- switch mode func -----
  const switchModes = (mode) => {
    if (mode === 'light') {
      setIsDarkModeActive(false);
    } else if (mode === 'dark') {
      setIsDarkModeActive(true);
    }
  }

  //----------------------------------
  // Ran's provider data
  const [sizeAvg, setSizeAvg] = useState(0);
  const [widthAvg, setWidthAvg] = useState(0);
  const [comfortAvg, setComfortAvg] = useState(0);
  const [qualityAvg, setQualityAvg] = useState(0);
  const [lengthAvg, setLengthAvg] = useState(0);
  const [fitAvg, setFitAvg] = useState(0);
  const [prodName, setProdName] = useState('');
  const [prodChar, setProdChar] = useState({});
  const [prodRec, setProdRec] = useState({});

  const [sortOption, setSortOption] = useState('relevant');
  const handleSortOption = (sortOpt) => (
    setSortOption(sortOpt)
  );

  const [sortByRel2, setSortRel2] = useState([]);
  const [sortByHelpful, setSortHelpful] = useState([]);
  const [sortByNewest, setSortNewest] = useState([]);

  useEffect(async () => {
    const pro_gen = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}`;
    const pro_sty = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}/styles`;
    const pro_related = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}/related`;
    const pro_meta = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${currentItem}`;
    const sortRel = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${currentItem}&sort=relevant&count=200`;
    const sortHelpful = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${currentItem}&sort=helpful&count=200`;
    const sortNewest = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${currentItem}&sort=newest&count=200`;

    const reqGen = axios.get(pro_gen, config);
    const reqSty = axios.get(pro_sty, config);
    const reqRel = axios.get(pro_related, config);
    const reqMeta = axios.get(pro_meta, config);

    // Ran's personal get request
    const reqSortByRel = axios.get(sortRel, config);
    const reqSortByHelpful = axios.get(sortHelpful, config);
    const reqSortByNewest = axios.get(sortNewest, config);

    // helper function that calculates avg ratings
    const avgStarRating = (ratings) => {
      let avgRating = 0;
      let sum = 0;
      let count = 0;

      Object.keys(ratings).map((key) => {
        sum += key * ratings[key];
        count += parseInt(ratings[key]);
      });
      return avgRating = Math.floor(sum / count / 0.25) * 0.25;
    }

    axios.all([reqGen, reqSty, reqRel, reqMeta, reqSortByRel, reqSortByNewest, reqSortByHelpful])
      .then(axios.spread((...responses) => {
        const resGen = responses[0];
        const resSty = responses[1];
        const resRel = responses[2];
        const resMeta = responses[3];
        const resSortByRel = responses[4];
        const resSortByNewest = responses[5];
        const resSortByHelpful = responses[6];

        setDetail(resGen.data);
        setLoading(false);
        setProductStyles(resSty.data.results);
        setSelectedStyle(resSty.data.results[0]);

        const { ratings } = resMeta.data;
        setRating(avgStarRating(ratings));

        // Ran's personal setState method
        const char = resMeta.data.characteristics
        setProdChar(char);
        setSizeAvg(char.Size ? char.Size.value : 0);
        setFitAvg(char.Fit ? char.Fit.value : 0);
        setWidthAvg(char.Width ? char.Width.value : 0);
        setLengthAvg(char.Length ? char.Length.value : 0);
        setQualityAvg(char.Quality ? char.Quality.value : 0);
        setComfortAvg(char.Comfort ? char.Comfort.value : 0);
        setProdRec(resMeta.data.recommended);

        setSortRel2(resSortByRel.data.results);
        setSortHelpful(resSortByHelpful.data.results);
        setSortNewest(resSortByNewest.data.results);
        setProdName(resGen.data.name);
      }))
      .catch((errors) => {
        console.log(errors);
      });

    // --------------- sheri ---------------
    const { data } = await axios.get(pro_related, config);
    const dataArr = [];

    for (const id of data) {
      const product = await handleProductById(id);
      const style = await handleStyleById(id);
      const resRating = await handleRatingById(id);
      const rating = avgStarRating(resRating.ratings);
      // console.log(rating);
      dataArr.push({ product, style, rating });
    }
    setRelatedItems(dataArr);
  }, [currentItem]);



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
      setCurrent,
      relatedItems,
      handleCurrent,
      isDarkModeActive,
      // Ran's personal provider data
      sizeAvg,
      widthAvg,
      comfortAvg,
      qualityAvg,
      lengthAvg,
      fitAvg,
      sortOption,
      handleSortOption,
      sortByRel2,
      sortByNewest,
      sortByHelpful,
      prodName,
      prodChar,
      prodRec,
    }}
    >

      <div className={isDarkModeActive ? "components dark-home-page" : "components"}>
        <div className={isDarkModeActive ? "title dark-title" : "title"}>Athena</div>
        <div className={isDarkModeActive ? "toggle-dark" : "toggle-light"}>
          <h4 className="light-mode" onClick={() => switchModes('light')}/>
          <h4 className="dark-mode" onClick={() => switchModes('dark')}/>
        </div>
        <Overview />
        <RelatedItems />
        <ReviewBox />
        {/* <QnA /> */}
      </div>
    </Context.Provider>
  );
};

export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Context from './context.js';
import ReviewBox from './Reviews/ReviewBox.jsx';
import Overview from './Overview/Overview.jsx';
import QnA from './QnA/QnA.jsx';
import access from './config.js';
import RelatedItems from './RelatedItems/RelatedItems.jsx';

const App = () => {
  const [detail, setDetail] = useState(null);

  const [isLoading, setLoading] = useState(true);

  const [selectedStyle, setSelectedStyle] = useState(null);

  const [productStyles, setProductStyles] = useState(null);

  const [currentItem, setCurrent] = useState(17067);

  const [currentRating, setRating] = useState(null);

  // Ran's provider data
  const [sizeAvg, setSizeAvg] = useState(0);
  const [widthAvg, setWidthAvg] = useState(0);
  const [comfortAvg, setComfortAvg] = useState(0);
  const [qualityAvg, setQualityAvg] = useState(0);
  const [lengthAvg, setLengthAvg] = useState(0);
  const [fitAvg, setFitAvg] = useState(0);

  const [sortOption, setSortOption] = useState('relevant');
  const handleSortOption = (sortOpt) => (
    setSortOption(sortOpt)
  );

  const [sortByRel, setSortRel] = useState([]);
  const [sortByHelpful, setSortHelpful] = useState([]);
  const [sortByNewest, setSortNewest] = useState([]);


  // const { currentRev, serRev } = useContext(Context);
  // useEffect(() => {
  // axios
  // },[currentRev])

  const handleStyle = (target) => setSelectedStyle(target);

  useEffect(() => {
    const config = {
      headers: { Authorization: `${access.TOKEN}` },
    };
    // console.log(access.TOKEN)
    const pro_gen = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}`;

    const pro_sty = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}/styles`;

    const pro_related = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${currentItem}/related`;

    const pro_meta = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews/meta/?product_id=${currentItem}`;

    const sortRel = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${currentItem}&sort=relevant`;

    const sortHelpful = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${currentItem}&sort=relevant`;

    const sortNewest = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews?product_id=${currentItem}&sort=relevant`;

    const reqGen = axios.get(pro_gen, config);
    const reqSty = axios.get(pro_sty, config);
    const reqRel = axios.get(pro_related, config);
    const reqMeta = axios.get(pro_meta, config);

    // Ran's personal get request
    const reqSortByRel = axios.get(sortRel, config);
    const reqSortByHelpful = axios.get(sortHelpful, config);
    const reqSortByNewest = axios.get(sortNewest, config);

    axios.all([reqGen, reqSty, reqRel, reqMeta, reqSortByRel, reqSortByNewest, reqSortByHelpful])
      .then(axios.spread((...responses) => {
        const resGen = responses[0];
        const resSty = responses[1];
        const resRel = responses[2];
        const resMeta = responses[3];
        const resSortByRel = responses[4];
        const reqSortByNewest = responses[5];
        const reqSortByHelpful = responses[6];

        setDetail(resGen.data);
        setLoading(false);
        setProductStyles(resSty.data.results);
        setSelectedStyle(resSty.data.results[0]);

        // calculate avg rating
        let avgRating = 0;
        let sum = 0;
        let count = 0;
        const { ratings } = resMeta.data;
        Object.keys(ratings).map((key) => {
          sum += key * ratings[key];
          count += parseInt(ratings[key]);
        });
        avgRating = Math.floor(sum / count / 0.25) * 0.25;
        setRating(avgRating);

        // Ran's personal setState method
        const char = resMeta.data.characteristics;
        setSizeAvg(char.Size ? char.Size.value : 0);
        setFitAvg(char.Fit ? char.Fit.value : 0);
        setWidthAvg(char.Width ? char.Width.value : 0);
        setLengthAvg(char.Length ? char.Length.value : 0);
        setQualityAvg(char.Quality ? char.Quality.value : 0);
        setComfortAvg(char.Comfort ? char.Comfort.value : 0);
        setSortRel(resSortByRel.data.results);
        //console.log("setState:", resSortByRel.data.results);
      }))
      .catch((errors) => {
        console.log(errors);
      });
  }, []);

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

      // Ran's personal provider data
      sizeAvg,
      widthAvg,
      comfortAvg,
      qualityAvg,
      lengthAvg,
      fitAvg,
      sortOption,
      handleSortOption,
      sortByRel,
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

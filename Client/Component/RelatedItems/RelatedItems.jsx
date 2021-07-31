import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';

import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';
import sample from './sampledata.js';
import Context from './related-context.js';


const RelatedItems = (props) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  const config = {
    headers: { 'Authorization': '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' }
  };

  useEffect(() => {
    axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/17067/related', config)
      .then(res => { var temp = [];
        res.data.map(prodId => (
        axios.get(`https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/${prodId}`, config)
          .then(response => { temp.push(response.data); })
          .then(setRelatedProducts(temp))
          .then()
          .catch(err => console.log('ERROR'))
        ))
      })
      .catch(err => console.log('err'));
  }, [])

  // const handleRelatedProducts = target => setRelatedProducts(target);

  // -------- Scroll Arrows ----------
  const listRef = useRef(null);
  const [slideRight, setSlideRight] = useState(0);

  const scrollRight = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
      });
    }
    setSlideRight(1);
  };

  const scrollLeft = () => {
    if (listRef.current) {
      listRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
      });
    }
    setSlideRight(0);
  };

  const handleScrollRight = target => scrollRight(target);
  const handleScrollLeft = target => scrollLeft(target);

  // ------- Popup window Click ----------

  const [starPopup, setStarPopup] = useState(false);
  const handleStarPopup = target => setStarPopup(target);

  // -------- Remove popup window --------
  const closeRef = useRef(null);

  const ClosePopup = (popRef) => {
    useEffect(() => {
      let handleClickOutside = (event) => {
        if (popRef.current && ! popRef.current.contains(event.target)) {
          setStarPopup(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [popRef]);
  };

  const handleClosePopup = target => ClosePopup(target);
  // --------------------------------------------

  return (
    <Context.Provider value={{
      listRef, handleScrollRight, handleScrollLeft, slideRight, starPopup, handleStarPopup, closeRef, handleClosePopup, relatedProducts
    }}>
        <RelatedList />
        <OutfitList />
    </Context.Provider>
  );
};

export default RelatedItems;
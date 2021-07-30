import React, { useRef, useState, useEffect } from 'react';
// import axios from 'axios';

import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';
import sample from './sampledata.js';
import Context from './related-context.js';

const RelatedItems = (props) => {
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
      listRef, handleScrollRight, handleScrollLeft, slideRight, starPopup, handleStarPopup, closeRef, handleClosePopup
    }}>
        <RelatedList />
        <OutfitList />
    </Context.Provider>
  );
};

export default RelatedItems;
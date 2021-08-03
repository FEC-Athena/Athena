import React, { useRef, useState, useContext } from 'react';
import Context from './related-context.js';
import AppContext from '../context.js';

const OutfitList = () => {
  const { currentItem } = useContext(AppContext);
  const [outfitArr, setOutfitArr] = useState([]);
  let handleOutfitList = () => {
    return setOutfitArr(outfitArr.push(currentItem))
  }

  // ------- scrolling arrows function ---------
  const ourfitRef = useRef(null);
  const [hideArrow, setHideArrow] = useState(0);
  const slider = outfitArr.length * 300;

  const scrollToRight = () => {
    if (ourfitRef.current) {
      ourfitRef.current.scrollBy({
        top: 0,
        left: 400,
        behavior: 'smooth'
      });
    }
    setHideArrow(hideArrow + 700);
  };

  const scrollToLeft = () => {
    if (ourfitRef.current) {
      ourfitRef.current.scrollBy({
        top: 0,
        left: -400,
        behavior: 'smooth'
      });
    }
    setHideArrow(hideArrow - 700);
  };

  return (
    <div className="outfit-container">
      <div className="list-title">My Outfit List<br></br></div>
      <div className="carousel">
        {hideArrow <= 0 ? <div/> : <button className="carousel-button-left" >
          <i className="fas fa-angle-left fa-3x" onClick={scrollToLeft}></i>
        </button>}
        <div className="carousel-track-container" ref={ourfitRef}>
          <div className="carousel-slide">
            <div className="products">
              <div className="blankCard">
                <i className="far fa-plus-square fa-4x"></i>
                <div>Add to Outfit</div>
              </div>
              {/* {outfitArr.map()} */}
            </div>
          </div>
        </div>
        {hideArrow >= slider ? <div/> : <button className="carousel-button-right" >
          <i className="fas fa-angle-right fa-3x" onClick={scrollToRight}></i>
        </button>}
      </div>
    </div>
    );
};

export default OutfitList;
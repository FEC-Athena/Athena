import React, { useRef, useState } from 'react';
import Context from './related-context.js';

const OutfitList = (props) => {
  const ourfitRef = useRef(null);
  const [hideArrow, setHideArrow] = useState(2);

  const scrollToRight = () => {
    if (ourfitRef.current) {
      ourfitRef.current.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
      });
    }
    setHideArrow(3);
  };

  const scrollToLeft = () => {
    if (ourfitRef.current) {
      ourfitRef.current.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
      });
    }
    setHideArrow(2);
  };

  return (
    <div className="outfit-container">
      <div className="list-title">My Outfit List<br></br></div>
      <div className="carousel">
        {hideArrow === 2 ? <div/> : <button className="carousel-button-left" >
          <i className="fas fa-angle-left fa-3x" onClick={scrollToLeft}></i>
        </button>}
        <div className="carousel-track-container" ref={ourfitRef}>
          <div className="carousel-slide">
            <div className="products">
              <div className="blankCard">
                <i className="far fa-plus-square fa-4x"></i>
                <div>Add to Outfit</div>
              </div>
            </div>
          </div>
        </div>
        {hideArrow === 3 ? <div/> : <button className="carousel-button-right" >
          <i className="fas fa-angle-right fa-3x" onClick={scrollToRight}></i>
        </button>}
      </div>
    </div>
    );


};

export default OutfitList;
import React, { useContext, useState } from 'react';
import RelatedCard from './RelatedCard.jsx';
import ComparingPopup from './ComparingPopup.jsx';
import Context from './related-context.js';
import AppContext from '../context.js';

const RelatedList = () => {
  const [selectedRel, setSelectedRel] = useState(null);
  const { relatedItems } = useContext(AppContext);
  const { listRef, handleScrollRight, handleScrollLeft, slideRight, starPopup } = useContext(Context);
  const slider = relatedItems.length * 300;

  const trackingSelected = (selectedProd) => {
    setSelectedRel(selectedProd);
  };

  return ((relatedItems) ? (
    <div className="related-container">
      <div className="list-title">Related Products<br></br></div>
      <div className="carousel">
        {slideRight <= 0 ? <div /> : <button className="carousel-button-left" >
          <i className="fas fa-angle-left fa-3x" onClick={() => handleScrollLeft()}></i>
        </button>}
        <div className="carousel-track-container">
          <div className="carousel-slide" ref={listRef}>
            {relatedItems.map((item, index) => {
              return <RelatedCard key={index} item={item} rating={item.rating} handleSelect={trackingSelected}/>
            })}
            {/* { selectedRel ? */}
            {/*  <ComparingPopup trigger={starPopup} currentProd={selectedRel}/> : <div/>} */}
          </div>
        </div>
        {slideRight >= slider ? <div /> : <button className="carousel-button-right" aria-label="related-list right button">
          <i className="fas fa-angle-right fa-3x" onClick={() => handleScrollRight()}></i>
        </button>}
      </div>
    </div>
  ) : <div></div> );
};

export default RelatedList;
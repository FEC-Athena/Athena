import React, { useRef, useState, useContext, useEffect } from 'react';
import OutfitCard from './OutfitCard.jsx';
import Context from './related-context.js';
import AppContext from '../context.js';

const OutfitList = (props) => {
  // ------- adding current item to the outfit list -------
  const { currentItem, detail, productStyles, currentRating } = useContext(AppContext);
  const [outfitArr, setOutfitArr] = useState([]);
  const [idArr, setIdArr] = useState([]);

  const handleOutfitList = () => {
    let temp = [];
    let tempId = [];
    let newObj = { product: detail, style: productStyles, rating: currentRating };
    if (idArr.indexOf(currentItem) < 0) {
      temp.push(newObj);
      tempId.push(currentItem);
      setOutfitArr(outfitArr.concat(temp));
      setIdArr(idArr.concat(tempId));
    }
  };

  // ------ removing item from outfit list ----------
  const handleRemoveOutfit = (selectedId) => {
    for (var i = 0; i < outfitArr.length; i++) {
      if (outfitArr[i].product.id === selectedId ) {
        setOutfitArr(outfitArr.slice(0, i).concat(outfitArr.slice(i + 1)));
      }
    }
    var index = idArr.indexOf(selectedId);
    setIdArr(idArr.slice(0, index).concat(idArr.slice(index + 1)));
  };

  // ------- scrolling arrows function ---------
  const ourfitRef = useRef(null);
  const [hideArrow, setHideArrow] = useState(0);
  const slider = outfitArr.length * 300;

  const scrollToRight = () => {
    if (ourfitRef.current) {
      ourfitRef.current.scrollTo({
        top: 0,
        left: 400,
        behavior: 'smooth'
      });
    }
    setHideArrow(hideArrow + 700);
  };

  const scrollToLeft = () => {
    if (ourfitRef.current) {
      ourfitRef.current.scrollTo({
        top: 0,
        left: -400,
        behavior: 'smooth'
      });
    }
    setHideArrow(hideArrow - 700);
  };

  // --------------------------------

  return (
    <div className="outfit-container">
      <div className="list-title" >My Outfit List<br></br></div>
      <div className="carousel">
        {hideArrow <= 0 ? <div/> : <button className="carousel-button-left" >
          <i className="fas fa-angle-left fa-3x" onClick={() => scrollToLeft()}></i>
        </button>}
        <div className="carousel-track-container">
          <div className="carousel-slide" ref={ourfitRef}>
            <div className="blankCard">
              <i className="far fa-plus-square fa-4x" onClick={() => handleOutfitList()}></i>
              <div>Add to Outfit</div>
            </div>
            {outfitArr.map((prod, index) => {
              return <OutfitCard key={index} prod={prod} handleRemoveOutfit={handleRemoveOutfit}/>
            })}
          </div>
        </div>
        {hideArrow >= slider ? <div/> : <button className="carousel-button-right" >
          <i className="fas fa-angle-right fa-3x" onClick={() => scrollToRight()}></i>
        </button>}
      </div>
    </div>
  );
};

export default OutfitList;
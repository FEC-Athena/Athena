import React from 'react';

const OutfitList = (props) => (
  <div className="outfit-container">
    <div className="list-title">My Outfit List<br></br></div>
    <div className="carousel">
      <button className="carousel-button-left">
        <i className="fas fa-angle-left fa-3x"></i>
      </button>
      <div className="carousel-track-container">
        <div className="carousel-track">
          <div className="carousel-slide">
            <i className="far fa-plus-square fa-4x"></i>
          </div>
        </div>
      </div>
      <button className="carousel-button-right">
        <i className="fas fa-angle-right fa-3x"></i>
      </button>
    </div>
  </div>
);

export default OutfitList;
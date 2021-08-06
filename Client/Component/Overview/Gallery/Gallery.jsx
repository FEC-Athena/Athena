import React, { useState, useEffect, useContext } from 'react';
import Context from '../../context.js';

const Gallery = props => {
  // console.log(props.photos)
  const [currentInd, setCurrentInd] = useState(0);
  const { selectedStyle } = useContext(Context);
  // console.log(selectedStyle)
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [large, setLarge] = useState(false);
  const handleOver = index => setSelectedPhoto(selectedStyle.photos[index])

  const leftArrow = () => {
    if (selectedStyle.photos[currentInd - 1]) {
      setSelectedPhoto(selectedStyle.photos[currentInd - 1])
      setCurrentInd(currentInd - 1);
    }
  };

  const rightArrow = () => {
    if (selectedStyle.photos[currentInd + 1]) {
      setSelectedPhoto(selectedStyle.photos[currentInd + 1])
      setCurrentInd(currentInd + 1);
    }
  };

  const makeFull = () => {
    setLarge(!large);
  };
  // console.log(currentInd)

  useEffect(() => {
    if (selectedStyle) {
      setSelectedPhoto(selectedStyle.photos[0]);
    }
  }, [selectedStyle])

  if (selectedStyle && selectedPhoto) {
    // console.log(selectedStyle.photos.length)
    return (
      <div className="carousel1">
        <div className="left">
          {selectedStyle.photos.map((photo, index) => {
            return (
              <img key={index} src={photo.thumbnail_url} className="thumbNail" onMouseOver={() => handleOver(index)} alt="thumbnail"/>
            )
          })}
        </div>
        {/* <div className="right">
          <img src={selectedPhoto.url} />
        </div> */}
        <button className="carousel1__button carousel1__button--left" onClick={leftArrow} aria-label="left arrow button">
          <i className="fas fa-chevron-left fa-3x"></i>
        </button>
        <div className={`carousel1__track-container ${large === true ? 'largesc' : ''}`}>
          <img className="bigImg" src={selectedPhoto.url} alt="main image"/>
        </div>
        <button className={`carousel1__button carousel1__button--right ${large === true ? 'largescArr' : ''}`} onClick={rightArrow} aria-label="right arrow button">
          <i className="fas fa-chevron-right fa-3x"></i>
        </button>
        <button className={`full-btn ${large === true ? 'large-btn' : ''}`} onClick={makeFull} aria-label="fullscreen button">
          <i className="fas fa-expand"></i>
        </button>
      </div>
    )
  } else {
    return (
      <div> Gallery still loading.. </div>
    )
  }
}

export default Gallery;

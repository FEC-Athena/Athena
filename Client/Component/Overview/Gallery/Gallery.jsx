import React, { useState, useEffect, useContext } from 'react';
import './gallery.css';
import Context from '../../context.js';

const Gallery = props => {
  // console.log(props.photos)
  const { selectedStyle } = useContext(Context);
  // console.log(selectedStyle)
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const handleOver = index => setSelectedPhoto(selectedStyle.photos[index])
  // console.log(props.photos)
  // console.log(selectedStyle)

  useEffect(() => {
    if (selectedStyle) {
      setSelectedPhoto(selectedStyle.photos[0]);
    }
  }, [selectedStyle])

  if (selectedStyle && selectedPhoto) {
    // console.log(selectedStyle)
    return (
      <div className="root">
        <div className="left">
          {selectedStyle.photos.map((photo, index) => {
            return (
              <img key={index} src={photo.thumbnail_url} className="thumbNail" onMouseOver={() => handleOver(index)} />
            )
          })}
        </div>
        <div className="right">
          <img src={selectedPhoto.url} />
        </div>
      </div>
    )
  } else {
    return (
      <div> Gallery still loading.. </div>
    )
  }
}

export default Gallery;

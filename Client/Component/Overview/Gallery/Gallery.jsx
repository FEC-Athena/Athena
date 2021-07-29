import React, { useState, useEffect } from 'react';
import './gallery.css';

const Gallery = props => {
  // console.log(props.photos)
  const [selectedPhoto, setSelectedPhoto] = useState(props.photos[0])
  const handleOver = index => setSelectedPhoto(props.photos[index])
  // console.log(this.state.selectedPhoto)

  useEffect(() => {
    setSelectedPhoto(props.photos[0]);
  }, [props.photos])

  return (
    <div className="root">
      <div className="left">
        {props.photos.map((photo, index) => {
          return (
            <img key={index} src={photo.thumbnail_url} className="thumbNail" onMouseOver={() => handleOver(index)} />
          )
        })}
      </div>
      <div className="right">
        <img src={selectedPhoto.url}/>
      </div>
    </div>
  )
}

export default Gallery;

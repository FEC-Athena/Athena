import React from 'react';
import './gallery.css';

let key = -1;

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedPhoto: this.props.photos[0]
    }
  }

  handleOver(e) {
    const newid = e.target.id;
    this.setState({ selectedPhoto: this.props.photos[newid] })
  }

  render() {
    const { selectedPhoto } = this.state;
    console.log(this.state.selectedPhoto)
    console.log(key);
    return (
      <div className="root">
        <div className="left">
          {this.props.photos.map((photo) => {
            key++;
            return (
              <img id={key} src={photo.thumbnail_url} className="thumbNail" onMouseOver={this.handleOver.bind(this)} />
            )
          })}
        </div>
        <div className="right">
          <img src={selectedPhoto.url} width="400" height="600" />
        </div>
      </div>
    )
  }
}

export default Gallery;

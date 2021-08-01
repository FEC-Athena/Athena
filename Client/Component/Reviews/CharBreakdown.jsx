import React, { useState, useContext} from 'react';
import ReviewsContext from './reviews-context';

const CharBreakdown = () => {
  // const { size, width, comfort, quality, length, fit } = useContext(ReviewsContext);

  return (
    <div className="char-br">
      <div style={{fontSize: 13, marginBottom: 3}}>Size</div>
      <div className="char-bar"></div>
      <div style={{fontSize: 17, marginTop: -17, marginLeft: 10}}>{"\u25BC"}</div>
      <span>Too small</span>
      <span style={{float: 'right', marginRight: 8}}>Too large</span>

      <div style={{fontSize: 13, marginBottom: 3}}>Width</div>
      <div className="char-bar"></div>
      <div style={{fontSize: 17, marginTop: -17, marginLeft: 10}}>{"\u25BC"}</div>
      <span>Too narrow</span>
      <span style={{float: 'right', marginRight: 8}}>Too wide</span>

      <div style={{fontSize: 13, marginBottom: 3}}>Comfort</div>
      <div className="char-bar"></div>
      <div style={{fontSize: 17, marginTop: -17, marginLeft: 10}}>{"\u25BC"}</div>
      <span>Uncomfortable</span>
      <span style={{float: 'right', marginRight: 8}}>Perfect</span>

      <div style={{fontSize: 13, marginBottom: 3}}>Quality</div>
      <div className="char-bar"></div>
      <div style={{fontSize: 17, marginTop: -17, marginLeft: 10}}>{"\u25BC"}</div>
      <span>Poor</span>
      <span style={{float: 'right', marginRight: 8}}>Perfect</span>

      <div style={{fontSize: 13, marginBottom: 3}}>Length</div>
      <div className="char-bar"></div>
      <div style={{fontSize: 17, marginTop: -17, marginLeft: 10}}>{"\u25BC"}</div>
      <span>Runs short</span>
      <span style={{float: 'right', marginRight: 8}}>Runs long</span>

      <div style={{fontSize: 13, marginBottom: 3}}>Fit</div>
      <div className="char-bar"></div>
      <div style={{fontSize: 17, marginTop: -17, marginLeft: 10}}>{"\u25BC"}</div>
      <span>Runs tight</span>
      <span style={{float: 'right', marginRight: 8}}>Runs long</span>
    </div>
  )
}

export default CharBreakdown;
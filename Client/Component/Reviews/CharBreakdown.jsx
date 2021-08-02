import React, { useContext } from 'react';
import Context from '../context';

const CharBreakdown = () => {
  const {
    sizeAvg, widthAvg, comfortAvg, qualityAvg, lengthAvg, fitAvg,
  } = useContext(Context);

  const size = (sizeAvg / 5) * 290;
  const width = (widthAvg / 5) * 290;
  const comfort = (comfortAvg / 5) * 290;
  const quality = (qualityAvg / 5) * 290;
  const length = (lengthAvg / 5) * 290;
  const fit = (fitAvg / 5) * 290;

  return (
    <div className="char-br">
      <div>
        { sizeAvg
          ? (
            <>
              <div style={{ fontSize: 13, marginBottom: 10, marginTop: 15 }}>Size</div>
              <div className="char-bar"></div>
              <div style={{ fontSize: 17, marginTop: -17, marginLeft: size }}>{'\u25BC'}</div>
              <span style={{float: 'left'}}>Too small</span>
              <span style={{ float: 'right', marginRight: 8 }}>Too large</span>
            </>
          ) : null}
      </div>

      <div>
        { widthAvg
          ? (
            <>
              <div style={{ fontSize: 13, marginBottom: 10, marginTop: 15 }}>Width</div>
              <div className="char-bar"></div>
              <div style={{ fontSize: 17, marginTop: -17, marginLeft: width }}>{'\u25BC'}</div>
              <span style={{float: 'left'}}>Too narrow</span>
              <span style={{ float: 'right', marginRight: 8 }}>Too wide</span>
            </>
          ) : null}
      </div>

      <div>
        { comfortAvg
          ? (
            <>
              <div style={{ fontSize: 13, marginBottom: 10, marginTop: 25}}>Comfort</div>
              <div className="char-bar"></div>
              <div style={{ fontSize: 17, marginTop: -17, marginLeft: comfort }}>{'\u25BC'}</div>
              <span style={{float: 'left'}}>Uncomfortable</span>
              <span style={{ float: 'right', marginRight: 8}}>Perfect</span>
            </>
          ) : null}
      </div>

      <div>
        { qualityAvg
          ? (
            <>
              <div style={{ fontSize: 13, marginBottom: 10, marginTop: 25 }}>Quality</div>
              <div className="char-bar"></div>
              <div style={{ fontSize: 17, marginTop: -17, marginLeft: quality}}>{'\u25BC'}</div>
              <span style={{ float: 'left' }}>Poor</span>
              <span style={{ float: 'right', marginRight: 8 }}>Perfect</span>
            </>
          ) : null}
      </div>

      <div>
        { lengthAvg
          ? (
            <>
              <div style={{ fontSize: 13, marginBottom: 10, marginTop: 25 }}>Length</div>
              <div className="char-bar"></div>
              <div style={{ fontSize: 17, marginTop: -17, marginLeft: length }}>{'\u25BC'}</div>
              <span style={{float: 'left'}}>Runs short</span>
              <span style={{ float: 'right', marginRight: 8 }}>Runs long</span>
            </>
          ) : null}
      </div>

      <div>
        { fitAvg
          ? (
            <>
              <div style={{ fontSize: 13, marginBottom: 10, marginTop: 25 }}>Fit</div>
              <div className="char-bar"></div>
              <div style={{ fontSize: 17, marginTop: -17, marginLeft: fit }}>{'\u25BC'}</div>
              <span style={{float: 'left'}}>Runs tight</span>
              <span style={{ float: 'right', marginRight: 8 }}>Runs long</span>
            </>
          ) : null}
      </div>
    </div>
  );
};

export default CharBreakdown;

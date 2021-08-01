import React, {useState, useContext} from 'react';
import StarFill from './StarFill.jsx';
import ReviewsContext from './reviews-context';

function StarRating() {

  const {rating, handleRating} = useContext(ReviewsContext);

  const [selection, setSelection] = useState(0);
  const hoverOver = event => {
    let val = 0;
    if (event.target.getAttribute("star-id"))
      val = event.target.getAttribute("star-id");
    setSelection(val);
  };
  return (
    <div

      onMouseOut={() => hoverOver(null)}

      onClick={event =>
        handleRating(event.target.getAttribute("star-id") || rating)
      }
      onMouseOver={hoverOver}
    >

      {Array.from({ length: 5 }, (v, i) => (
        <StarFill
          starId={i + 1}
          key={`star_${i + 1} `}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        />
      ))}
    </div>
  );
}

export default StarRating;
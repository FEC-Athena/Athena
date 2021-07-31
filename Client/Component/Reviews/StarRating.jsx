import React, {useState} from 'react';
import StarFill from './StarFill.jsx';

function StarRating(props) {

  const [rating, setRating] = useState(
    typeof props.rating == "number" ? props.rating : 0
  );

  const [selection, setSelection] = useState(0);
  const hoverOver = event => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("star-id"))
      val = event.target.getAttribute("star-id");
    setSelection(val);
  };
  return (
    <div

      onMouseOut={() => hoverOver(null)}

      onClick={event =>
        setRating(event.target.getAttribute("star-id") || rating)
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
import React from 'react';

function StarFill({ marked, starId }) {
  return (
    <span star-id={starId} style={{ color: "#ff9933", fontSize: 30}} role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
}

export default StarFill;
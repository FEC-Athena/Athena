import React from 'react';

function Sort(props) {
  return (
    <div className="sort">{props.data.length} reviews, sorted by
      <select className="sort-options" onChange={(e)=>props.changeSort(e)}>
        <option>relevant</option>
        <option>newest</option>
        <option>helpful</option>
      </select><br></br><br></br></div>
  )

}


export default Sort;
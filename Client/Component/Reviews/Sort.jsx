import React, {useContext} from 'react';
import Context from '../context';
import ReviewsContext from './reviews-context';

function Sort(props) {
  const { sortOption } = useContext(Context);
  const { reviewList } = useContext(ReviewsContext);

  return (
    <div className="sort">{reviewList.length} reviews, sorted by
      <select className="sort-options" onChange={(e)=>props.changeSort(e)} value={sortOption}>
        <option>relevant</option>
        <option>newest</option>
        <option>helpful</option>
      </select><br></br><br></br></div>
  )

}

export default Sort;
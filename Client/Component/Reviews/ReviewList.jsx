import React, { useState } from 'react';
import moment from 'moment';
import Star from './Star.jsx';
import VoteHelpfulness from './VoteHelpfulness.jsx';
import Sort from './Sort.jsx';

function ReviewList(props) {

  return(
    <>
      <Sort data={props.data}/>
      <div>
        {props.data.map((review) => (
          <div key={review.id}>
            <Star rating={review.rating}/>
            <div>{review.name}{moment(review.date).format(", MMM Do, YYYY")}</div>
            <div style={{fontWeight: "bold"}}>{review.title}</div><br></br>
            <div>{review.body}</div><br></br>
            <VoteHelpfulness review={review} />

          </div>
        ))}
      </div>
    </>
  )
}


export default ReviewList;
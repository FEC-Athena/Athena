import React from 'react';
import axios from 'axios';

import RelatedCard from './RelatedCard.jsx';
import sample from './sampledata.js';

const RelatedList = (props) => (
  <div>
    <div className="list-title">Related Products<br></br></div>
    <div className="carousel">
      <button className="carousel-button-left">
        <i className="fas fa-angle-left fa-2x" ></i>
      </button>
      <div className="carousel-track-container">
        <div className="carousel-track">
          <div className="carousel-slide">
            {sample.sampledata.map((product) => (
            <RelatedCard product={product} />
            ))}
          </div>
        </div>
      </div>
      <button className="carousel-button-right">
        <i className="fas fa-angle-right fa-2x"></i>
      </button>
    </div>
  </div>
);

export default RelatedList;

//res.data.results.
{/* <img></img> */ }
{/* should access img with different url  */ }

// const url = `https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products`;
  // const [products, setProducts] = useState({
  //   data: null,
  //   error: false
  // });

  // useEffect(() => {
  //   setProducts({
  //     data: null,
  //     error: false
  //   });
  //   axios.get(url)
  //     .then(res => {
  //       setProducts({
  //         data: res.data,
  //         error: false
  //       });
  //     })
  //     .catch(() => {
  //       setProducts({
  //         data: null,
  //         error: true
  //       })
  //     });
  // }, [url])

  // var content = null;

  // if (products.error) {
  //   content = <p>There was an error</p>
  // }

  // if (products.data) {
  //   content =
    // <div>
    //   <div>{products.data.category}</div>
    //   <div>{products.data.name}</div>
    //   <div>{products.data.default_price}</div>
    // </div>

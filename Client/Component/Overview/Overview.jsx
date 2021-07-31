import React, { Component, useState, useEffect, useContext } from 'react';
import Context from '../context.js'
import Info from './Info/Info.jsx';
import Desc from './Desc.jsx';
import Gallery from './Gallery/Gallery.jsx';
import axios from 'axios';
import './overview.css';
// import App from '../App.jsx';
// =============== Using Hooks ==================

const Overview = props => {
  // const { selectedStyle, setSelectedStyle, detail, productStyles, setProductStyles, isLoading, setLoading } = useContext(Context);
  // const [isLoading, setLoading] = useState(true);
  // const [selectedDetail, setSelectedDetail] = useState(props.detail);
  // useEffect(() => {
  //   axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products/17067/styles', config)
  //     .then((res) => {
  //       console.log('style yes')
  //       setProductStyles(res.data.results)
  //       setSelectedStyle(res.data.results[0])
  //       setLoading(false);
  //     })
  //     .catch(err => console.log('err'))
  // }, [])

  // const { selectedStyle, productStyles, selectedDetail } = this.state;
  const handleStyle = target => setSelectedStyle(target);

  const { isLoading } = useContext(Context);

  if (isLoading) {
    return (
      <div> I am still loading... </div>
    )
  } else {
    return (
      // <Context.Provider value={{
      //   handleStyle
      // }}>
        <div>
          <div className="top">
            <Gallery className="gallery" />
            <Info className="info" />
          </div>
          {/* <Desc desc={detail} /> */}
          <Desc />
        </div>
      // </Context.Provider >
    )
  }
}
export default Overview;
// class Info extends Component {
// ============== Class ===================
//   constructor(props) {
//     super(props);
//     state = {
//       counter: 0,
//       display: 'welcome',
//       username: ''
//     }
//   }

//   handleCount() {
//     this.setState({counter: {this.state.counter + 1}})
//   }
// }

// this.props.handleChange useContext


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

  const { isLoading } = useContext(Context);

  if (isLoading) {
    return (
      <div> I am still loading... </div>
    )
  } else {
    return (
      <div>
        <div className="top">
          <Gallery className="gallery" />
          <Info className="info" />
        </div>
        <Desc />
      </div>
    )
  }
}
export default Overview;


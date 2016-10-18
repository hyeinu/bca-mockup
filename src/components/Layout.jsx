import React, { Component } from 'react';

import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import Who from './Who.jsx'
import Why from './Why.jsx'
import Donate from './Donate.jsx'

export default class Layout extends Component{
  render(){
    return(
      <div>
        <Header />
        <NavBar />
        <div className="main" id="mainTarget"></div>
        <div className="main">
          <div className="container">
          <Who />
          <Why />
          <Donate />
          </div>
        </div>
      </div>
    )
  }
}

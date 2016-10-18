import React, { Component } from 'react';

export default class Header extends Component{
  render(){
    return(
      <div>
        <div className="header">
          <img className="center-block" style={{height: '120px'}} src="http://www.hopkinsmedicine.org/sebin/j/p/the_fetting_fund.png" alt=""/>
          <h1 className="text-center splashText">#savetheboobies</h1>
          <a href="#donate" className="btn center-block">Donate</a>
        </div>
      </div>
    )
  }
}

import React, { Component } from 'react';
import { Tabs, Tab, Slider } from 'material-ui';

export default class Navbar extends Component{
  constructor(props){
    super(props)

    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let targetElm = document.getElementById('mainTarget');
    let navB = document.getElementById('navBar');
    let target = targetElm.getBoundingClientRect();

    if(target.top <= 25){
      navB.classList.add("main-nav-scrolled");
    } else {
      navB.classList.remove("main-nav-scrolled");
    }
  }
  render(){
    return(
      <nav className="navbar navbar-default main-nav" id="navBar">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNav" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            {/* <a className="navbar-brand" href="#">Brand</a> */}
          </div>
          <div className="collapse navbar-collapse" id="myNav">
          <ul className="nav nav-justified">
            <li><a href="#who">Who</a></li>
            <li><a href="#why">Why</a></li>
            <li><a href="#donate">Donate</a></li>
          </ul>
          </div>
        </div>
      </nav>
    )
  }
}

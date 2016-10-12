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
          <Tabs inkBarStyle={{ backgroundColor: '#c73350' }}>
            <Tab href="#who" style={{ backgroundColor: '#c73350' }} label="Who" />
            <Tab href="#what" style={{ backgroundColor: '#c73350' }} label="Why" />
            <Tab href="#donate" style={{ backgroundColor: '#c73350' }} label="Donate" />
            {/* <Tab label="onActive" /> */}
          </Tabs>
          {/* <ul className="nav navbar-nav">
            <li><a href="#">Link</a></li>
            <li><a href="#">Link</a></li>
          </ul> */}
          </div>
        </div>
      </nav>
    )
  }
}

import React, { Component } from 'react';

export default class Splash extends Component{
  constructor(props){
    super(props)
    this.state = {
      target: null
    }
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    let targetElm = document.getElementById('theTarget')
    let target = targetElm.getBoundingClientRect();
    this.setState({
      target: target.top
    })
    if(target.top <= 10){
      targetElm.classList.add("test");
    } else {
      targetElm.classList.remove("test");
    }
  }
  render(){
    // let { target } = this.state;
    // if(target < 0){
    //   return (
    //     <div>
    //     <h1>Test</h1>
    //     </div>
    //   )
    // }
    return(
      <div className="splashSize">
      <div className="splash text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div id="theTarget" className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      <div className="text-center">This is the Splash Page!</div>
      </div>
    )
  }
}

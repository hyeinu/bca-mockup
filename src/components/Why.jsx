import React, { Component } from 'react';

export default class Why extends Component{
  render(){
    return(
      <div>
        <div className="sectionPad" id="why">
          <p>Breast cancer survivor, Leslie Ries, writes a letter to her daughters describing her journey with breast cancer and her efforts to fund breast cancer prevention at Johns Hopkins Kimmel Cancer Center.</p>
          <div className="video-container">
          <iframe src="https://www.youtube.com/embed/geRSCva05JI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    )
  }
}

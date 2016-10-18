import React, { Component } from 'react';

export default class Who extends Component{
  render(){
    return(
      <div>
        <div className="sectionPad" id="who">
          <img className="center-block" src="http://www.hopkinsmedicine.org/sebin/j/p/the_fetting_fund.png" alt=""/>
          <p>The John Fetting Fund for Breast Cancer Prevention
           will enable us to fund the most promising research in breast cancer prevention.
           The Fetting Fund supports basic and translational breast cancer prevention research
           performed by or under the direct supervision of the faculty of the Johns Hopkins Breast
           Cancer Program. Donations to the Fetting Fund are divided equally between an endowment
           that generates income for future research and direct support for current research.
           The Fund provides seed money for studies which position investigators to get larger grants.
           The Fund is overseen by an Advisory Committee which defines its  mission, works to increase
           the endowment, decides what research to support, and communicates effectively and consistently
           with the Fund’s donors. The current priority of the Fund is to discover changes in breast
           tissue DNA that identify women at-risk for breast cancer and its consequences.
           By improving our understanding of who is at risk, we can focus our efforts on those at risk
           and reassure those who are not.</p>
          <div className="video-container">
            <iframe src="https://www.youtube.com/embed/ja_AQLd6UqY" frameborder="0" allowfullscreen></iframe>
          </div>
          <h1 className="text-center">Meet our Fetting Fund Researchers</h1>
          <div className="row">
            <div className="col-xs-3">
            <img src="http://www.hopkinsmedicine.org/sebin/d/y/Visvanathan.jpg" alt="" className="img-rounded"/>
            </div>
            <div className="col-xs-9">
            <p>Kala Visvanathan M.D., M.H.S., is leading a multispecialty team that is working
            to identify genetic changes suggestive of cancer that could be used to monitor
            normal breast tissue for early signs of a developing cancer. This study involves women
            who are undergoing mastectomy for breast cancer. If successful, it will provide a
            much-needed method to identify precancerous changes in breast tissue that will allow
            us to recognize women who have a higher chance of developing breast cancer and those
            who have a lower chance when factoring in established risk factors.  Most importantly,
            this research could one day provide us the opportunity to intervene early to prevent
            the cancer.</p>
            </div>
          </div>
          <div className="row">
            <p></p>
          </div>
          <div className="row">
            <div className="col-xs-9">
            <p>Dipali Sharma, Ph.D., is testing honokiol, a natural chemical extracted from the
            bark of the Magnolia tree. In mouse models, the natural extract demonstrated the ability
            to prevent some breast cancers.  Dr. Sharma’s research uses honokiol in mouse and cell
            line models to explore what mechanisms are affected by this substance.
            This study is the first study to investigate the breast cancer prevention potential of honokiol.
            It is an initial step in moving novel preventative treatments to clinical studies in women
            and hopefully finding a way to prevent breast cancer. </p>
            </div>
            <div className="col-xs-3">
            <img src="http://www.hopkinsmedicine.org/sebin/p/r/Sharma.jpeg" alt="" className="img-rounded"/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

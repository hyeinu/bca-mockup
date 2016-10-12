import React, { Component } from 'react';

import Header from './Header.jsx'
import NavBar from './NavBar.jsx'
import Who from './Who.jsx'

export default class Layout extends Component{
  render(){
    return(
      <div>
        <Header />
        <NavBar />
        <div className="main" id="mainTarget"></div>
        <div className="main">
          <div className="container">
            <p>Lorem ipsum dolor sit amet, sed vestibulum pellentesque ac suspendisse penatibus, eros vestibulum maecenas turpis dictum sed augue, vitae at curabitur donec massa, sem natoque odio sodales at, quam rhoncus. Suscipit commodo reprehenderit justo pellentesque ac felis, at vel, amet consectetuer mauris ac ridiculus inceptos, non dapibus a ut libero fusce nec. Libero vestibulum amet mus nonummy etiam. Dapibus leo tristique lobortis torquent lectus, consectetuer mauris porttitor, eleifend sollicitudin, arcu duis, maecenas curae fermentum. Urna hendrerit non volutpat pharetra qui ut, vestibulum phasellus tempor, laoreet lectus porta scelerisque justo.
            Mollis quis urna, vestibulum ut dui, cras mauris nam a bibendum, mattis elementum sodales. Nulla fames lectus scelerisque nec, auctor ipsum fusce libero justo in, urna sem urna nam integer consectetuer odio, mollis libero. Pellentesque mi non pellentesque sollicitudin, libero lorem lorem consequat sociis, reprehenderit sed, vestibulum dignissimos fringilla ipsum sagittis risus nullam. Aenean lorem purus sed, felis amet imperdiet libero. A sed interdum, volutpat sit ac nec ut sapien dolor, aliquet et morbi et, praesent dapibus lectus posuere adipiscing.
            Neque sapien tellus quam tristique quisque. Justo vitae. Eleifend sem justo felis donec eget, aenean tellus. A et quis nulla dignissim. Sit felis pellentesque varius. Rutrum turpis sed ridiculus quam ipsa, wisi malesuada odio facilisi velit sed, sed accumsan sit porttitor porta tristique. Vehicula amet sit elit vivamus in et, nec parturient tortor aliquam in ut, ante feugiat adipiscing amet blandit placerat, odio risus cursus nisl sit. Litora natoque et hendrerit nam curabitur suspendisse, suscipit porttitor lacus urna dolor sit in, odio turpis, volutpat at vitae lorem imperdiet sed urna, libero ipsum duis mattis quam eros dictum. Lacus orci adipiscing eu egestas, leo felis, urna pulvinar eu est, arcu praesent eleifend, sit ullamcorper feugiat. Vestibulum molestie gravida. Ipsum neque sint ut justo, dui ad tempore vivamus praesent aliquet libero.
            Mauris volutpat erat, nonummy ullamcorper convallis viverra sociis ullamcorper, id mauris et interdum eu. Blandit ut ipsum ut ipsum erat dolor, quis pede nonummy suspendisse at dolor, quam turpis wisi, amet ultricies ligula nulla sociosqu. Duis magna dictumst id sollicitudin, leo non leo luctus nostra eros vitae. Luctus class, nisl aliquam dolor pede maecenas sed ullamcorper, rhoncus ipsum sem integer ratione quam sodales. Platea elit luctus sem.
            </p>
          <Who />
            <p>Lorem ipsum dolor sit amet, sed vestibulum pellentesque ac suspendisse penatibus, eros vestibulum maecenas turpis dictum sed augue, vitae at curabitur donec massa, sem natoque odio sodales at, quam rhoncus. Suscipit commodo reprehenderit justo pellentesque ac felis, at vel, amet consectetuer mauris ac ridiculus inceptos, non dapibus a ut libero fusce nec. Libero vestibulum amet mus nonummy etiam. Dapibus leo tristique lobortis torquent lectus, consectetuer mauris porttitor, eleifend sollicitudin, arcu duis, maecenas curae fermentum. Urna hendrerit non volutpat pharetra qui ut, vestibulum phasellus tempor, laoreet lectus porta scelerisque justo.
            Mollis quis urna, vestibulum ut dui, cras mauris nam a bibendum, mattis elementum sodales. Nulla fames lectus scelerisque nec, auctor ipsum fusce libero justo in, urna sem urna nam integer consectetuer odio, mollis libero. Pellentesque mi non pellentesque sollicitudin, libero lorem lorem consequat sociis, reprehenderit sed, vestibulum dignissimos fringilla ipsum sagittis risus nullam. Aenean lorem purus sed, felis amet imperdiet libero. A sed interdum, volutpat sit ac nec ut sapien dolor, aliquet et morbi et, praesent dapibus lectus posuere adipiscing.
            Neque sapien tellus quam tristique quisque. Justo vitae. Eleifend sem justo felis donec eget, aenean tellus. A et quis nulla dignissim. Sit felis pellentesque varius. Rutrum turpis sed ridiculus quam ipsa, wisi malesuada odio facilisi velit sed, sed accumsan sit porttitor porta tristique. Vehicula amet sit elit vivamus in et, nec parturient tortor aliquam in ut, ante feugiat adipiscing amet blandit placerat, odio risus cursus nisl sit. Litora natoque et hendrerit nam curabitur suspendisse, suscipit porttitor lacus urna dolor sit in, odio turpis, volutpat at vitae lorem imperdiet sed urna, libero ipsum duis mattis quam eros dictum. Lacus orci adipiscing eu egestas, leo felis, urna pulvinar eu est, arcu praesent eleifend, sit ullamcorper feugiat. Vestibulum molestie gravida. Ipsum neque sint ut justo, dui ad tempore vivamus praesent aliquet libero.
            Mauris volutpat erat, nonummy ullamcorper convallis viverra sociis ullamcorper, id mauris et interdum eu. Blandit ut ipsum ut ipsum erat dolor, quis pede nonummy suspendisse at dolor, quam turpis wisi, amet ultricies ligula nulla sociosqu. Duis magna dictumst id sollicitudin, leo non leo luctus nostra eros vitae. Luctus class, nisl aliquam dolor pede maecenas sed ullamcorper, rhoncus ipsum sem integer ratione quam sodales. Platea elit luctus sem.
            </p>
          </div>
        </div>
      </div>
    )
  }
}

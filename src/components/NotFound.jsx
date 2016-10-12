import React, { Component } from 'react';

export default class NotFound extends Component {
    constructor(props) {
        super(props);
        this.displayName = 'NotFound';
    }
    render() {
        return (
          <div className="container">
            <h1>404 - The page you are looking for does not exist! </h1>
          </div>
        )
    }
}

import React, { Component } from "react";

export default class componentName extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark center">
            <div>
              <a className="navbar-brand centered" style={{ marginBottom: -100, padding: 10}}>
                <span >Farjuce bookings</span>
              </a>
              
            </div> 
          </nav>
        </header>
      </div>
    );
  }
}

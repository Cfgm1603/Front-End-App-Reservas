import React, { Component } from "react";

import { Link } from "react-router-dom";
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
              <a
                className="navbar-brand centered"
                style={{ marginBottom: -100, padding: 10 }}
              >
                <Link to="/">
                  <span>Farjuce bookings</span>
                </Link>
              </a>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

import React, { Component } from "react";

export class DashBoard extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col s12 m6">
            <div className="card white hoverable">
              <div className="card-content grey-text text-darken-4">
                <span className="card-title  blue-text text-darken-1">
                  Card Title
                </span>
                <p>
                  I am a very simple card. I am good at containing small bits of
                  information. I am convenient because I require little markup
                  to use effectively.
                </p>
              </div>
              <div className="card-action ">
                <a className="red-text text-lighten-2" href="#">
                  Description
                </a>
                <a className="red-text" href="#">
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="btn-floating red lighten-2 btn-large waves-effect waves-light red hoverable"
          style={{ position: "absolute", right: "30px", bottom: "30px" }}
        >
          <i className="material-icons">add</i>
        </a>
      </div>
    );
  }
}

export default DashBoard;

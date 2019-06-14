import React, { Component } from "react";

export class DashBoard extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="row">
            <div class="col s12 m6">
              <div class="card hoverable">
                <div class="card-image">
                  <img src="https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=1&w=500" />
                  <span class="card-title">Card Title</span>
                  <a class="btn-floating red lighten-2 halfway-fab waves-effect waves-light red hoverable">
                    <i class="material-icons">add</i>
                  </a>
                </div>
                <div class="card-content">
                  <p>
                    <blockquote>
                      I am a very simple card. I am good at containing small
                      bits of information. I am convenient because I require
                      little markup to use effectively.
                    </blockquote>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          class="btn-floating red lighten-2 btn-large waves-effect waves-light red hoverable"
          style={{ position: "absolute", right: "30px", bottom: "30px" }}
        >
          <i class="material-icons">add</i>
        </a>
      </div>
    );
  }
}

export default DashBoard;

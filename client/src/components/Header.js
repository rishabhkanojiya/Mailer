import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Payments from "./Payments";
import M from "materialize-css";

export class Header extends Component {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }

  renderSign = clsProp => {
    switch (this.props.payload) {
      case null:
        return (
          <div>
            <div className="preloader-wrapper active">
              <div className="spinner-layer spinner-red-only">
                <div className="circle-clipper left">
                  <div className="circle" />
                </div>
                <div className="gap-patch">
                  <div className="circle" />
                </div>
                <div className="circle-clipper right">
                  <div className="circle" />
                </div>
              </div>
            </div>
          </div>
        );

      case false:
        return (
          <li>
            <a
              href="/auth/google"
              className="   waves-effect waves-light btn red lighten-2 no-hide-on-med-and-down"
              style={{ borderRadius: "4px" }}
            >
              Sign In
            </a>
          </li>
        );

      default:
        return (
          <>
            <li className={clsProp}>
              <Link to="/surveys">Dashboard</Link>
            </li>
            <li className={clsProp}>
              <Link to="/survey/new">New survey</Link>
            </li>
            <li className={clsProp}>
              <Link>Credits : {this.props.payload.credits}</Link>
            </li>
            <li className={` center-align ${clsProp}`}>
              <Payments />
            </li>
            <li>
              <a
                href="/api/logout"
                className={`waves-effect waves-light btn red lighten-2  ${clsProp}`}
                style={{ borderRadius: "4px" }}
              >
                Sign Out
              </a>
            </li>
          </>
        );
    }
  };

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper  blue lighten-1 ">
            <a className="sidenav-trigger" data-target="slide-out">
              <i className="material-icons ">menu</i>
            </a>
            <Link
              to={this.props.payload ? "/surveys" : "/"}
              className="brand-logo"
              style={{ padding: "0 30px" }}
            >
              Emaily
            </Link>

            <ul id="nav-mobile" className="right">
              {this.renderSign("hide-on-med-and-down")}
            </ul>
          </div>
        </nav>
        <ul
          className="sidenav"
          id="slide-out"
          ref={sidenav => {
            this.sidenav = sidenav;
          }}
        >
          {this.renderSign()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    payload: state.auth.payload,
    isLoading: state.auth.isLoading
  };
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

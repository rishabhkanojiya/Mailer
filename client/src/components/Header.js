import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Payments from "./Payments";

export class Header extends Component {
  renderSign = () => {
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
            <li className="hide-on-med-and-down">
              <Link to="/surveys">Dashboard</Link>
            </li>
            <li className="hide-on-med-and-down">
              <Link to="/survey/new">New survey</Link>
            </li>
            <li className="hide-on-med-and-down">
              <Link>Credits : {this.props.payload.credits}</Link>
            </li>
            <li>
              <Payments />
            </li>
            <li>
              <a
                href="/api/logout"
                className="   waves-effect waves-light btn red lighten-2 no-hide-on-med-and-down "
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
            <Link
              to={this.props.payload ? "/surveys" : "/"}
              className="brand-logo"
              style={{ padding: "0 30px" }}
            >
              Emaily
            </Link>
            <ul id="nav-mobile" className="right">
              {this.renderSign()}
            </ul>
          </div>
        </nav>
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

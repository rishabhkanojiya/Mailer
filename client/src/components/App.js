import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import History from "../History";
import Landing from "./Landing";
import DashBoard from "./DashBoard";
import SurveyNew from "./SurveyNew";
import { fetchUser } from "../actions";
import { connect } from "react-redux";

export class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className=" grey lighten-5" style={{ height: "100vh" }}>
        <Router history={History}>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact component={Landing} />
              <Route path="/surveys" exact component={DashBoard} />
              <Route path="/survey/new" exact component={SurveyNew} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {};

const mapDispatchToProps = {
  fetchUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

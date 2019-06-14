import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { handleToken } from "../actions";
import { connect } from "react-redux";

export class Payments extends Component {
  render() {
    // debugger;

    return (
      <div>
        <StripeCheckout
          name="Emaily"
          description="5$ for 5 email credits"
          amount={500}
          token={token => this.props.handleToken(token)}
          stripeKey={process.env.REACT_APP_STRIPE_PUB_KEY}
        >
          <a
            class="waves-effect waves-light btn red lighten-2 no-hide-on-med-and-down "
            style={{ borderRadius: "4px" }}
          >
            Add Credits
          </a>
        </StripeCheckout>
      </div>
    );
  }
}

// const mapStateToProps = state => ({});

const mapDispatchToProps = {
  handleToken
};

export default connect(
  null,
  mapDispatchToProps
)(Payments);

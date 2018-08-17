import React, { Component } from "react";

import hoc from "../../hoc/hoc";
import Burger from "../../components/Burger/Burger";

class Builder extends Component {
  state = {
    ingredients: {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      patty: 0
    }
  };
  render() {
    return (
      <hoc>
        <Burger ingredients={this.state.ingredients} />
        <div>Controls</div>
      </hoc>
    );
  }
}

export default Builder;

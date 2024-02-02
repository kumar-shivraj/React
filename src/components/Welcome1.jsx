import { Component } from "react";

// in general we destruct the props in render method
class Welcome1 extends Component {
  render() {
    const { name, heroName } = this.props;
    // const {state1, state2} = this.state; // we can destruct the state like this
    return (
      <h1>
        Welcome {name} a.k.a {heroName}
      </h1>
    );
  }
}
export default Welcome1;

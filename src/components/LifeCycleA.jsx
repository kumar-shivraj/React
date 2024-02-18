import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";
class LifeCycleA extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shivraj",
    };
    console.log("LifecycleA constructor");
  }

  // it has access to state and props through parameters has to return new state or null
  static getDerivedStateFromProps(props, state) {
    console.log("LifecycleA getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifecycleA componentDidMount");
  }

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <div>LifeCycle A</div>
        <LifeCycleB />
      </div>
    );
  }
}

export default LifeCycleA;

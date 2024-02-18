import React, { Component } from "react";

class LifeCycleD extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shivraj",
    };
    console.log("LifeCycleD constructor");
  }

  // it has access to state and props through parameters has to return new state and null
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleD getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleD componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleD shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleD getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleD componentDidUpdate");
  }

  render() {
    console.log("LifeCycleD render");
    return <div>LifeCycle D</div>;
  }
}

export default LifeCycleD;

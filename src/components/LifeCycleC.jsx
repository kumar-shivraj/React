import React, { Component } from "react";
import LifeCycleD from "./LifeCycleD";
class LifeCycleC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shivraj",
    };
    console.log("LifeCycleC constructor");
  }

  changeState = () => {
    this.setState({
      name: "Shivraj Singh",
    });
  };
  // it has access to state and props through parameters has to return new state or null
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleC getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleC componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleC shouldComponentUpdate");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifeCycleC getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifeCycleC componentDidUpdate");
  }

  render() {
    console.log("LifeCycleC render");
    return (
      <div>
        <div>LifeCycle C</div>
        <button onClick={this.changeState}>Change State</button>
        <LifeCycleD />
      </div>
    );
  }
}

export default LifeCycleC;

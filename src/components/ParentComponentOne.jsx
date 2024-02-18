import React, { Component } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComponentOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Shivraj",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "Shivraj",
      });
    }, 2000);
  }
  render() {
    console.log("*************  Parent Comp Render  *************");
    return (
      <div>
        Parent ComponentOne
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponentOne;

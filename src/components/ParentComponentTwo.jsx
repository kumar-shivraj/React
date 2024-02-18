import React, { Component, PureComponent } from "react";
import RegComp from "./RegComp";
import PureComp from "./PureComp";

class ParentComponentTwo extends PureComponent {
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
        Parent ComponentTwo
        <RegComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComponentTwo;

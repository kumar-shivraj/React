import React, { Component } from "react";

export class ClassClick1 extends Component {
  clickHandler() {
    console.log("Class button clicked.");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}>Click Me</button>
      </div>
    );
  }
}

export default ClassClick1;

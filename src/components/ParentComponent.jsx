import React, { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      parentName: "Parent",
    };

    this.greetParent = this.greetParent.bind(this);
  }

  //    /* this will only called by child component but data is not getting passed from child component to parent component *
  //   greetParent() {
  //     alert(`Hello ${this.state.parentName}`);
  //   }

  // this will only called by child component and data is getting passed from child component to parent component
  greetParent(childName) {
    alert(`Hello ${this.state.parentName} from ${childName}`);
  }

  render() {
    return (
      <div>
        <ChildComponent greetHandler={this.greetParent} />
      </div>
    );
  }
}

export default ParentComponent;

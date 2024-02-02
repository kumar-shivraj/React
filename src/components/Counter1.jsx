import React, { Component } from "react";

export default class Counter1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  increment() {
    // below won't work
    // this.state.count = this.state.count + 1;
    // console.log(this.state.count);

    // this.setState({
    //   count: this.state.count + 1,
    // });
    // console.log(this.state.count);   // This will not print the latest value of count because of async behaviour of setState

    // this.setState(
    //     {
    //       count: this.state.count + 1,
    //     },
    //     () => {
    //       console.log("Called value : ", this.state.count);
    //     }
    //   );

    // when we want to update the state based on prev state
    // this.setState(
    //   (prevState) => {
    //     return {
    //       count: prevState.count + 1,
    //     };
    //   },
    //   () => {
    //     console.log("Called value : ", this.state.count);
    //   }
    // );

    // this props is optional here, if we don't require, we can remove it
    this.setState(
      (prevState, props) => ({
        count: prevState.count + 1,
      }),
      () => {
        console.log("Called value : ", this.state.count);
      }
    );
  }

  incrementFive() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }
  render() {
    return (
      <div>
        <div>count - {this.state.count}</div>

        {/* this will throw error as can't read property of undefined of(reading state) */}
        {/* <button onClick={this.increment}>Increment</button>  */}

        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.incrementFive()}>Increment Five</button>
      </div>
    );
  }
}

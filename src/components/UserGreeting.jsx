import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isLoggedIn: false,
      isLoggedIn: true,
    };
  }
  render() {
    // using if else, conditional rendering
    // if (this.state.isLoggedIn) return <div>Welcome Shivraj</div>;
    // else return <div>Welcome Guest</div>;

    // another approach
    // let message;
    // if (this.state.isLoggedIn) message = <div>Welcome Shivraj</div>;
    // else message = <div>Welcome Guest</div>;
    // return <div>{message}</div>;

    // ternary operator approach
    // return this.state.isLoggedIn ? (
    //   <div>Welcome Shivraj</div>
    // ) : (
    //   <div>Welcome Guest</div>
    // );

    // short circuit operator approach, a special case of ternary operator approach
    return this.state.isLoggedIn && <div>Welcome Shivraj</div>;
  }
}

export default UserGreeting;

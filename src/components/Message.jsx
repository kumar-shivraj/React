import { Component } from "react";

// ==========  understanding state with class component ==========

class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitor",
    };
  }

  changeMessage() {
    this.setState({
      message: "Thanks for subscribing",
    });
  }

  render() {
    // return <h1>Welcome Visitor</h1>;
    // return <h1>{this.state.message}</h1>;
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
        
      </div>
    );
  }
}
export default Message;

// ==========  understanding state ends ==========

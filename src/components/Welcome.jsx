import { Component } from "react";

// class Welcome extends Component {
//   render() {
//     return <div>Welcome!</div>;
//   }
// }
// export default Welcome;

// ==========  understanding props with class component ==========

class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome {this.props.name} a.k.a {this.props.heroName}
      </h1>
    );
  }
}
export default Welcome;

// ==========  understanding props ends ==========

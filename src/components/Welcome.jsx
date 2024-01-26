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
    const {name, heroName} = this.props;
    // const {state1, state2} = this.state;
    return (
      <h1>
        {/* Welcome {this.props.name} a.k.a {this.props.heroName} */}
        Welcome {name} a.k.a {heroName}

      </h1>
    );
  }
}
export default Welcome;

// ==========  understanding props ends ==========

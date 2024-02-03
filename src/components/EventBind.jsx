import React, { Component } from "react";

export class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello",
    };

    // ==========    scenario 4   =========
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   ==========    scenario 1   =========
  //   clickHandler() {
  //     // this.setState({
  //     //   message: "Good Bye!",
  //     // });
  //     // console.log(this);  // undefined
  //   }

  //   //   ==========    scenario 2   =========
  //   clickHandler() {
  //     this.setState({
  //       message: "Good Bye!",
  //     });
  //     console.log(this);
  //   }

  //   //   ==========    scenario 3   =========
  //   clickHandler() {
  //     this.setState({
  //       message: "Good Bye!",
  //     });
  //     console.log(this);
  //   }

  //   //   ==========    scenario 4   =========
  //   clickHandler() {
  //     this.setState({
  //       message: "Good Bye!",
  //     });
  //     console.log(this);
  //   }

  //   ==========    scenario 5   =========
  clickHandler = () => {
    this.setState({
      message: "Good Bye!",
    });
    console.log(this);
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>

        {/* ============================================================== */}
        {/* === scenario 1 === */}
        {/* this will not work as this keyword is not bound */}
        {/* <button onClick={this.clickHandler}>Click</button> */}
        {/* ============================================================== */}

        {/* ============================================================== */}
        {/* === scenario 2 === */}
        {/* Although it's working fine, every update to the state cause the component to re-render. this intern will generate a brand new on every 
        render. Although impact on performance on small application is not significant,
        it could be troubleshoot in large application and components that contains nested components */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* ============================================================== */}


        {/* ============================================================== */}
        {/* === scenario 3 === */}
        {/* this scenerio is also having performance issue */}
        {/* ==1== */}
        {/* <button
          onClick={() => {
            return this.clickHandler();
          }}
        >
          Click
        </button> */}

        {/* ==2== */}
        {/* <button onClick={() => this.clickHandler()}>Click</button> */}

        {/* ============================================================== */}



        {/* ============================================================== */}
        {/* === scenario 4 === */}
        {/* this is the approach we're going to see in the most of the cases and it is also the approach in the react official documentation */}
        {/* this approach deals with the binding the event handler in constructor as approach to binding in render method */}
        {/* if our component doesn't contain the nested component then we can use this approach as it won't affect much */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* ============================================================== */}

        

        {/* ============================================================== */}
        {/* === scenario 5 === */}
        {/* to use an arraw function as a class property, basically change the way we define the method in class */}
        <button onClick={this.clickHandler}>Click</button>

        {/* ============================================================== */}
      </div>
    );
  }
}

export default EventBind;

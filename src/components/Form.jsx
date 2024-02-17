import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      comments: "",
      topic: "react",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleCommentsChange = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert(`${this.state.userName} ${this.state.comments} ${this.state.topic} `);
  };

  render() {
    // as code cleanup, we can destructure the state properties in the render method
    const { userName, comments, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            // value={this.state.userName}

            // as per the code cleanup
            value={userName}
            onChange={this.handleUserNameChange}
          />
        </div>
        <div>
          <label>Comments</label>
          <textarea
            // value={this.state.comments}

            // as per the code cleanup
            value={comments}
            onChange={this.handleCommentsChange}
          ></textarea>
        </div>
        <div>
          <label>Topic</label>
          <select
            //   value={this.state.topic}

            // as per the code cleanup
            value={topic}
            onChange={this.handleTopicChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;

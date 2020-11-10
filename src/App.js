import React, { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      tasks: [],
    };
  }

  render() {
    const { task, tasks } = this.state;

    return (
      <div id="container">
        <div className="users">Users</div>
        <div className="message-list">Messages List</div>
        <div className="new-message">New Message</div>
      </div>
    );
  }
}

export default App;

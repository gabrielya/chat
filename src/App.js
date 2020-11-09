import React, { Component } from "react";

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

    return <div>Hello World</div>;
  }
}

export default App;

import React, { Component } from "react";
import ReactDOM from "react-dom";
import TopLevelClass from "./TopLevelClass"


export default class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <TopLevelClass></TopLevelClass>
      </React.Fragment>
    )
  }
}

// const wrapper = document.getElementById("app");
// wrapper ? ReactDOM.render(<App />, wrapper) : null;

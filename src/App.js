import React, { Component } from "react";
import AvailableWorkers from "./components/AvailableWorkers";
import Works from "./components/Works";

class App extends Component {
  render() {
    return (
      <main>
        <AvailableWorkers />
        <Works />
      </main>
    );
  }
}

export default App;
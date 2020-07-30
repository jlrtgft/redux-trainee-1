import React, { Component } from "react";
import AvailableWorkers from "./components/AvailableWorkers";
import AddWorkerAndCompany from "./components/AddWorkerAndCompany";
import Companies from "./components/Companies";
import './App.css'
class App extends Component {
  render() {
    return (
      <main>
        <AddWorkerAndCompany />
        <AvailableWorkers />
        <Companies />
      </main>
    );
  }
}

export default App;
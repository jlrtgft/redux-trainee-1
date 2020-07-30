import React, { Component } from 'react';
import './../styles/Worker.css'

class Worker extends Component {

  render() {
    return (
      <div className="worker-container">
        <p>Nombre: {this.props.name}</p>
        <p>Profesión: {this.props.profession}</p>
        <p>Salario: {this.props.salary}</p>
      </div>
    );
  };
}

export default Worker;
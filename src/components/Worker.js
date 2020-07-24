import React, { Component } from 'react';

class Worker extends Component {

  render() {
    return (
      <div>
        <p>Nombre: {this.props.name}</p>
        <p>Profesión: {this.props.profession}</p>
        <p>Salario: {this.props.salary}</p>
      </div>
    );
  };
}

export default Worker;
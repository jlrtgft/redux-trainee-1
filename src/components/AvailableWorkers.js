import React, { Component } from 'react';
import { connect } from 'react-redux';

class AvailableWorkers extends Component {

  render() {
    return (
      <section>
        <h2>Trabajadores disponibles</h2>
        {
          this.props.workers.map(worker => (
            <div>
              <p>Nombre: {worker.name}</p>
              <p>Profesión: {worker.profession}</p>
              <p>Salario: {worker.salary}</p>
            </div>
          ))
        }
      </section>
    );
  }
}

const propertiesToPropertiesMapper = state => {
  return {
    workers: state.workers.workers
  }
}
export default connect(propertiesToPropertiesMapper, {})(AvailableWorkers);
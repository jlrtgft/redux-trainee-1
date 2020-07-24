import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCompany } from '../actions/removeWorkerFromWork';

class AvailableWorkers extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.handlePrint = this.handlePrint.bind(this);
  }

  handlePrint() {
    if (this.state.value) {
      this.setState({ value: 1 });
      // console.log(this.state.value);
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <section>
        <h2>Trabajadores disponibles</h2>
        <ul>
          {
            this.props.workers.map(worker => (
              <li key={worker.id}>
                <p>Nombre: {worker.name}</p>
                <p>Profesión: {worker.profession}</p>
                <p>Salario: {worker.salary}</p>
                <select onChange={this.handleChange}>
                  {
                    this.props.companies.map(e => (
                      <option key={e.id} value={e.id}>{e.company}</option>
                    ))
                  }
                </select>
                <button onClick={() => {
                  this.handlePrint();
                  this.props.callAddToCompany(this.state.value, worker);
                }}>Ok</button>
              </li>
            ))
          }
        </ul>
      </section >
    );
  }
  //this.props.callAddToCompany(this.state.value, worker)
}
const propertiesToPropertiesMapper = state => {
  return {
    workers: state.workers.workers,
    companies: state.works.works
  }
}

const dispatchToPropertiesMapper = dispatch => {
  return {
    callAddToCompany: (company, worker) => dispatch(addToCompany(company, worker))
  }
}
export default connect(propertiesToPropertiesMapper, dispatchToPropertiesMapper)(AvailableWorkers);
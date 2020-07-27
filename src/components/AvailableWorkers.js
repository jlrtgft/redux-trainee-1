import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCompany } from '../actions/workerActions';
import Worker from './Worker';
import { deleteWorker } from '../actions/workerActions';

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
    }
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  sendCompany(worker) {
    this.handlePrint();
    this.props.callAddToCompany(this.state.value, worker);
  }

  render() {
    return (
      <section>
        <h2>Trabajadores disponibles</h2>
        <ul>
          {
            this.props.workers.map(worker => (
              <li key={worker.id}>
                <Worker
                  name={worker.name}
                  profession={worker.profession}
                  salary={worker.salary} />
                <button onClick={() => this.props.callDeleteWorker(worker.id)}>X</button>
                <select onChange={this.handleChange}>
                  {
                    this.props.companies.map(e => (
                      <option key={e.id} value={e.id}>{e.company}</option>
                    ))
                  }
                </select>
                <button onClick={() => this.sendCompany(worker)}>Ok</button>
              </li>
            ))
          }
        </ul>
      </section >
    );
  }
}

const propertiesToPropertiesMapper = state => {
  return {
    workers: state.workers.workers,
    companies: state.works.companies
  }
}

const dispatchToPropertiesMapper = dispatch => {
  return {
    callAddToCompany: (company, worker) => dispatch(addToCompany(company, worker)),
    callDeleteWorker: workerId => dispatch(deleteWorker(workerId))
  }
}
export default connect(propertiesToPropertiesMapper, dispatchToPropertiesMapper)(AvailableWorkers);
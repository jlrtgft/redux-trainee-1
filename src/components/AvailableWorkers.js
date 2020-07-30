import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCompany } from '../actions/workerActions';
import Worker from './Worker';
import { deleteWorker } from '../actions/workerActions';
import '../styles/AvaibleWorkers.css';

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
      <section className="avaibleWorlers-container">
        <h2>Trabajadores disponibles</h2>
        <section className="workers-li">
          <ul>
            {
              this.props.workers.map(worker => (
                <li key={worker.id} className="worker">
                  <div className="container-del">
                    <button onClick={() => this.props.callDeleteWorker(worker.id)} className="delButton">X</button>
                  </div>
                  <div className="workerSection">
                    <Worker
                      name={worker.name}
                      profession={worker.profession}
                      salary={worker.salary} />
                    <div className="add-to-company">
                      <select onChange={this.handleChange}>
                        {
                          this.props.companies.map(e => (
                            <option key={e.id} value={e.id}>{e.company}</option>
                          ))
                        }
                      </select>
                      <button onClick={() => this.sendCompany(worker)} className="btn-add-to-company">Ok</button>
                    </div>
                  </div>
                </li>
              ))
            }
          </ul>
        </section>
      </section >
    );
  }
}

const propertiesToPropertiesMapper = state => {
  return {
    workers: state.workers.workers,
    companies: state.company.companies
  }
}

const dispatchToPropertiesMapper = dispatch => {
  return {
    callAddToCompany: (company, worker) => dispatch(addToCompany(company, worker)),
    callDeleteWorker: workerId => dispatch(deleteWorker(workerId))
  }
}
export default connect(propertiesToPropertiesMapper, dispatchToPropertiesMapper)(AvailableWorkers);
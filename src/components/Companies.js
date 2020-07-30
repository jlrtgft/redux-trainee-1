import React, { Component } from 'react';
import { connect } from 'react-redux';
import Worker from './Worker';
import { removerWorkerFromWorks } from '../actions/workerActions';
import { deleteCompany } from '../actions/companyActions';
import './../styles/Companies.css';

class Companies extends Component {

  render() {
    return (
      <section className="companies-container">
        <h2>Trabajos</h2>
        <div className="company">
          <ul>
            {
              this.props.companies.map(company => (
                <li key={company.id}>
                  <article>
                    <div className="container-del">
                      <button onClick={() => { this.props.delCompany(company.id) }} className="delButton">X</button>
                    </div>
                    <h3>Empresa: {company.company}</h3>
                    <div>
                      <p>Trabajadores</p>
                      <ul>
                        {
                          company.workers.map(worker => (
                            <li key={worker.id} className="workerContainer">
                              <div className="container-del">
                                <button onClick={() => this.props.removeWorker(company, worker)} className="delButton">X</button>
                              </div>
                              <Worker
                                name={worker.name}
                                profession={worker.profession}
                                salary={worker.salary} />
                            </li>
                          ))
                        }
                      </ul>
                    </div>
                  </article>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
    )
  }
}

const propertiesToPropertiesMapper = state => {
  return {
    companies: state.works.companies
  }
}

const dispatchToPropertiesMapper = dispatch => {
  return {
    removeWorker: (company, worker) => dispatch(removerWorkerFromWorks(company, worker)),
    delCompany: id => dispatch(deleteCompany(id))
  }
}

export default connect(propertiesToPropertiesMapper, dispatchToPropertiesMapper)(Companies);
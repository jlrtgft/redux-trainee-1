import React, { Component } from 'react';
import { connect } from 'react-redux';
import Worker from './Worker';
import { removerWorkerFromWorks } from '../actions/workerActions';
import { deleteCompany } from '../actions/companyActions';

class Companies extends Component {

  render() {
    return (
      <section>
        <h2>Trabajos</h2>
        <ul>
          {
            this.props.companies.map(company => (
              <li key={company.id}>
                <article>
                  <h3>Empresa: {company.company}</h3>
                  <button onClick={() => { this.props.delCompany(company.id) }}>X</button>
                  <div>
                    <p>Trabajadores</p>
                    <ul>
                      {
                        company.workers.map(worker => (
                          <li key={worker.id}>
                            <Worker
                              name={worker.name}
                              profession={worker.profession}
                              salary={worker.salary} />
                            <button onClick={() => this.props.removeWorker(company, worker)}>X</button>
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
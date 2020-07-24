import React, { Component } from 'react';
import { connect } from 'react-redux';
import Worker from './Worker';
import { removerWorkerFromWorks } from '../actions/removeWorkerFromWork';

class Works extends Component {

  render() {
    return (
      <section>
        <h2>Trabajos</h2>
        <ul>
          {
            this.props.works.map(work => (
              <li key={work.id}>
                <article>
                  <h3>Empresa: {work.company}</h3>
                  <div>
                    <p>Trabajadores</p>
                    <ul>
                      {
                        work.workers.map(worker => (
                          <li key={worker.id}>
                            <Worker
                              name={worker.name}
                              profession={worker.profession}
                              salary={worker.salary} />
                            <button onClick={() => this.props.removeWorker(work, worker)}>X</button>
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
    works: state.works.works
  }
}

const dispatchToPropertiesMapper = dispatch => {
  return {
    removeWorker: (work, worker) => dispatch(removerWorkerFromWorks(work, worker))
  }
}

export default connect(propertiesToPropertiesMapper, dispatchToPropertiesMapper)(Works);
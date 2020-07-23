import React, { Component } from 'react';
import { connect } from 'react-redux';

class Works extends Component {

  render() {
    return (
      <section>
        <h2>Trabajos</h2>
        {
          this.props.works.map(work => (
            <p>Compañia: {work.company}</p>
          ))
        }
      </section>
    )
  }
}

const propertiesToPropertiesMapper = state => {
  return {
    works: state.work.works
  }
}

export default connect(propertiesToPropertiesMapper, {})(Works);
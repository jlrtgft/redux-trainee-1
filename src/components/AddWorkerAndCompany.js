import React, { Component } from "react";
import { addCompany } from "../actions/addCompany";
import { connect } from "react-redux";

class AddWorkerAndCompany extends Component {

  render() {
    return (
      <section>
        <h2>Agregar...</h2>
        <div>
          <form onSubmit={this.workerForm.bind(this)}>
            <h3>Trabajador</h3>
            <input type="text" name="inpWorkerName" ref="workerName" placeholder="Nombre del trabajador"></input>
            <input type="text" name="inpWorkerProfession" ref="workerProfessoin" placeholder="Profesión"></input>
            <input type="text" name="inpWorkerSalary" ref="workerSalary" placeholder="Salario"></input>
            <button>Agregar trabajador</button>
          </form>
        </div>
        <div>
          <form onSubmit={this.companyForm.bind(this)}>
            <h3>Compañía</h3>
            <input type="text" name="inpCompanyName" ref="companyName" placeholder="Nombre de la compañía"></input>
            <button type="submit">Agregar compañía</button>
          </form>
        </div>
      </section>
    )
  }

  workerForm(e) {
    e.preventDefault();
  }

  companyForm(e) {
    e.preventDefault();
    this.props.callAddCompany(this.refs.companyName.value)
  }
}

const propertiesToPropertiesMapper = () => {
  return {}
}

const propertiesToDispatchMapper = dispatch => {
  return {
    callAddCompany: companyName => dispatch(addCompany(companyName))
  }
}

export default connect(propertiesToPropertiesMapper, propertiesToDispatchMapper)(AddWorkerAndCompany);
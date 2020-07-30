import React, { Component } from "react";
import { addCompany } from "../actions/companyActions";
import { connect } from "react-redux";
import { addWorker } from "../actions/workerActions";
import './../styles/AddWorkerAndCompany.css';

class AddWorkerAndCompany extends Component {

  render() {
    return (
      <section className="addWorkerAndCompany-container">
        <h2>AGREGAR</h2>
        <form onSubmit={this.workerForm.bind(this)} className="addWorkerForm">
          <h3>Trabajador</h3>
          <div className="inputsContainer">
            <input className="input-dataColors" type="text" name="inpWorkerName" ref="workerName" placeholder="Nombre del trabajador"></input>
            <input className="input-dataColors" type="text" name="inpWorkerProfession" ref="workerProfessoin" placeholder="Profesión"></input>
            <input className="input-dataColors" type="text" name="inpWorkerSalary" ref="workerSalary" placeholder="Salario"></input>
          </div>
          <center><button className="buttonClass" type="submit">Agregar trabajador</button></center>
        </form>
        <div>
          <form onSubmit={this.companyForm.bind(this)} className="addCompany-container">
            <h3>Compañía</h3>
            <div className="containerForm">
              <input type="text" name="inpCompanyName" ref="companyName" placeholder="Nombre de la compañía" className="input-dataColors"></input>
              <button type="submit" className="buttonClass">Agregar compañía</button>
            </div>
          </form>
        </div>
      </section>
    )
  }

  workerForm(e) {
    e.preventDefault();
    this.props.registryWorker(this.refs.workerName.value, this.refs.workerProfessoin.value, this.refs.workerSalary.value);
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
    callAddCompany: companyName => dispatch(addCompany(companyName)),
    registryWorker: (name, profession, salary) => dispatch(addWorker(name, profession, salary))
  }
}

export default connect(propertiesToPropertiesMapper, propertiesToDispatchMapper)(AddWorkerAndCompany);
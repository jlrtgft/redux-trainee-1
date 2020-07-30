import React, { Component } from "react";
import { addCompany } from "../actions/companyActions";
import { connect } from "react-redux";
import { addWorker } from "../actions/workerActions";
import './../styles/AddWorkerAndCompany.css';
import logo from './../logo.svg'
class AddWorkerAndCompany extends Component {

  render() {
    return (
      <section className="addWorkerAndCompany-container">
        <div className="header">
          <h2>AGREGAR</h2>
          {this.props.workers_loading && <img src={logo} className="loading-logo" />}
        </div>
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
            <div className="header">
              <h3>Compañía</h3>
              {this.props.company_loading && <img src={logo} className="loading-logo" />}
            </div>
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
    e.target.reset();
  }

  companyForm(e) {
    e.preventDefault();
    this.props.callAddCompany(this.refs.companyName.value);
    e.target.reset();
  }
}

const propertiesToPropertiesMapper = state => {
  return {
    workers_loading: state.workers.loading,
    company_loading: state.company.loading
  }
}

const propertiesToDispatchMapper = dispatch => {
  return {
    callAddCompany: companyName => dispatch(addCompany(companyName)),
    registryWorker: (name, profession, salary) => dispatch(addWorker(name, profession, salary))
  }
}

export default connect(propertiesToPropertiesMapper, propertiesToDispatchMapper)(AddWorkerAndCompany);
import React, { Component } from 'react';

class PersojaneForm extends Component {
  constructor () {
    super();
    this.state = {
      nombre: '',
      clase: '',
      icono: '',
      dificutad: 'low'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onAddPersonaje(this.state);
    this.setState({
      nombre: '',
      clase: '',
      icono: '',
      dificutad: 'low'
    });
  }

  handleInputChange(e) {
    const {value, name} = e.target;
    console.log(value, name);
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="nombre"
              className="form-control"
              value={this.state.nombre}
              onChange={this.handleInputChange}
              placeholder="nombre"
              />
          </div>
          <div className="form-group">
          <select
                name="clase"
                className="form-control"
                value={this.state.dificutad}
                onChange={this.handleInputChange}
              >
              <option>Mage</option>
              <option>Figther</option>
              <option>Marsman</option>
            </select>
          </div>
          <div className="form-group">
            <input
              type="text"
              name="icono"
              className="form-control"
              value={this.state.icono}
              onChange={this.handleInputChange}
              placeholder="icono (link)"
              />
          </div>
          <div className="form-group">
            <select
                name="dificutad"
                className="form-control"
                value={this.state.dificutad}
                onChange={this.handleInputChange}
              >
              <option>low</option>
              <option>medium</option>
              <option>high</option>
            </select>
          </div>
          <div className="form-group">
            <select
                name="raza"
                className="form-control"
                value={this.state.dificutad}
                onChange={this.handleInputChange}
              >
              <option>Humano</option>
              <option>Yourdle</option>
              <option>Otro</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    )
  }

}

export default PersojaneForm;

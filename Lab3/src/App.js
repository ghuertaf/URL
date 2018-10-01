import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navegacion';
import {datos} from "./datos.json";


class App extends Component {
  constructor (){
    super();
    this.state = {
      datos
    }

  }

  render() {
    const personajes = this.state.datos.map ((personaje, i) => {
      return(
        <div className="col-md-4">
          <div className="card mt-4">
            <div className="card-header">
             <h3>{personaje.nombre}</h3>
             <spam className="badge badge-pill badge-danger ml-2">
              {personaje.clase}
             </spam>
            </div>            
            <div className = "card-body">
            <img src={personaje.icono}/>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div className="App">
        
        <Navigation titulo="Personajes"/>
        <div className="container"> 
          <div className="row mt-4">
            {personajes}
          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Animals from './animals/Animals';
import './App.css';

class App extends Component {
  state={
    animals:[
      {id: 1, name: 'perro', type: 'domestico'},
      {id: 2, name: 'gato', type: 'domestico'},
      {id: 3, name: 'loro', type: 'silvestre'},
      {id: 4, name: 'cebra', type: 'salvaje'}
    ]
  }
  render() {
    return (
      <div className="App">
          <h3>States React APP</h3>
          <hr></hr>
          <Animals animals={this.state.animals}/>
      </div>
    );
  }
}

export default App;

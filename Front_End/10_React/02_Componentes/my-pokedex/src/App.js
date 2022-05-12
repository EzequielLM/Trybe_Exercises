import './App.css';
import React from 'react';
import Pokedex from './components/Pokedex';

class App extends React.Component {
  render() {
    return (
      <div className="App">
       {/*  <header id='title'>Pokedex</header> */}
        <Pokedex />
      </div>
    );
  }
}

export default App;

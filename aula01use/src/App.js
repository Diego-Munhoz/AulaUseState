import React, { useState } from 'react';
import './App.css';
import CalculadoraDeSoma from './components/soma';

function App() {

  

  return (
    <div className="App">
      <h1>Calculadora de Soma e Subtração</h1>
      <CalculadoraDeSoma/>
    </div>
  );
}

export default App;
